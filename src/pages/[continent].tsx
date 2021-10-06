import React from 'react';
import { Text, Flex, Stack } from '@chakra-ui/react';
import Description from '../components/continent/description';
import Cards from '../components/continent/cards';

const Continent: React.FC = () => {
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
          Europa
        </Text>
      </Flex>

      <Description />

      <Stack
        mt='8rem'
        px={['1.6rem', '6rem', '14rem']}
        mb='3.5rem'
      >
        <Text 
          fontSize={['2.4rem', '3.6rem']}
          fontWeight='500'
        >
          Cidades +100
        </Text>
        <Flex
          justify='space-between'
          mt='4rem'
        >
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </Flex>
      </Stack>
    </>
  );
}

export default Continent;