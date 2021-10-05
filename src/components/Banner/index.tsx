import { Flex } from '@chakra-ui/react';
import React from 'react';
import Airplane from './airplane';
import Texts from './texts';

const Banner: React.FC = () => {
  return (
    <Flex
     bgImage="url('./assets/svg/Background.svg')"
     bgSize='cover'
     bgRepeat="no-repeat"   
     align='center'
     justify='space-between'
     px={['1.6rem', '8rem', '14rem']}
    >
      <Texts /> 
      <Airplane />
    </Flex>
  );
}

export default Banner;