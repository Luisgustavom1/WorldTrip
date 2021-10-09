import { Flex } from '@chakra-ui/react';
import React from 'react';

interface TextProps {
  description: string
}

const Text = ({ description }: TextProps) => {
  return (
    <Flex
      fontSize={['1.4rem', '2.4rem']}
      maxWidth='60rem'
      mb='1.6rem'
    >
      { description }
    </Flex>
  );
}

export default Text;