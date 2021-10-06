import { VStack, Text, Heading } from '@chakra-ui/react';
import React from 'react';
import { theme } from '../../../styles/theme';

interface DataProps {
  title: string;
  estatistic: number
}

const Data: React.FC<DataProps> = ({ title, estatistic }) => {
  return (
    <VStack
      fontWeight='600'
    >
      <Text
        fontSize={['2.4rem', '4.8rem']}
        color={theme.color.highlight.highlight}
      >
        {estatistic}
      </Text>
      <Heading
        fontSize={['1.8rem', '2.4rem']}
      >
        {title}
      </Heading>
    </VStack>
  );
};

export default Data;