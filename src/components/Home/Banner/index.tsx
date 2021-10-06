import { Flex, useBreakpointValue } from '@chakra-ui/react';
import React from 'react';
import Airplane from './airplane';
import Texts from './texts';

const Banner: React.FC = () => {
  
  const isWideVersion = useBreakpointValue({
    base: false,
    md: true
  })

  return (
    <Flex
     bgImage="url('./assets/svg/Background.svg')"
     bgSize='cover'
     bgRepeat="no-repeat"   
     align='center'
     justify='space-between'
     px={['1.6rem', '6rem', '14rem']}
    >
      <Texts /> 
      { isWideVersion && <Airplane />}
    </Flex>
  );
}

export default Banner;