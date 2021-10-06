import { VStack } from '@chakra-ui/react';
import React from 'react';
import Slide from './slide';
import Titles from './titles';

const ChooseCity: React.FC = () => {
  return (
    <VStack>
      <Titles />
      <Slide />
    </VStack>
  );
}

export default ChooseCity;