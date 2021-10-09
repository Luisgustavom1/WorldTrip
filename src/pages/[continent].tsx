import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';

import { Text, Flex, Stack, Grid, useMediaQuery } from '@chakra-ui/react';

import Description from '../components/continent/description';
import Cards from '../components/continent/cards';

import { api } from '../services/api';
import { useRouter } from 'next/dist/client/router';
import { info } from '../types';

interface ContinentProps {
  continentData: [
    {
      continent: string,
      description: string,
      info: info
    },
    {
      cities: {
        id: number,
        city: string,
        country: string,
        countryImg: string
      }[]
    }
 ]
}

const Continent = ({ continentData }: ContinentProps) => {
  const router = useRouter();

  const [isWideVersion] = useMediaQuery("(min-width: 1047px)");

  if(router.isFallback) {
    return <div>LOADING...</div>
  }

  return (
    <>
      <Flex 
        bgImage="url('./assets/continents/europa.jpg')"
        bgPosition='center'
        w='100%'
        h={['150px', '500px']}
        alignItems='end'
        px={['37%', '14rem']}
        pb='6rem'
      >
        <Text
          fontSize={['2.8rem', '4.8rem']}
          fontWeight='600'
          color='#F5F8FA'
        >
          {continentData[0].continent}
        </Text>
      </Flex>

      <Description 
        description={continentData[0].description}
        info={continentData[0].info}
      />

      <Stack
        mt='8rem'
        px={['1.6rem', '6rem', '14rem']}
        mb='3.5rem'
      >
        <Text 
          fontSize={['2.4rem', '3.6rem']}
          fontWeight='500'
          mb='4rem'
        >
          Cidades +100
        </Text>
        <Grid
          templateColumns="repeat(auto-fill, minmax(256px, 1fr))"
          justifyItems={isWideVersion ? 'left' : 'center' }
          mt='4rem'
        >
          {continentData[1].cities.map(city => (
            <Cards 
              key={city.id}
              city={city.city}
              country={city.country}
              img={city.countryImg}
            />
          ))}
        </Grid>
      </Stack>
    </>
  );
}

export default Continent;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  }
};

export const getStaticProps: GetStaticProps = async context => {
  const { continent } = context.params;

  const continentData = await api.get(`/${continent}`).then(res => res.data);
  console.log(continentData);
  
  return {
    props: {
      continentData
    }
  }
}