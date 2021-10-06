import React from 'react';
import { Box, Text, Flex } from '@chakra-ui/react';
import Description from '../components/continent/description';

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
    </>
  );
}

export default Continent;