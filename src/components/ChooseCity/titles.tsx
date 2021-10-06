import { VStack, Text } from '@chakra-ui/react';
import React from 'react';

const Titles: React.FC = () => {
  return (
    <VStack
      mx='auto'
      my={['2.2rem', '5.2rem']}
      fontWeight='500'
      fontSize={['2rem', '3.2rem']}
      textAlign='center'
    >
      <Text>Vamos nessa?</Text>
      <Text>Então escolha seu continente</Text>
    </VStack>
  );
}

export default Titles;