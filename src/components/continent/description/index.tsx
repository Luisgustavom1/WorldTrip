import { Flex } from '@chakra-ui/react';
import React from 'react';
import DataContainer from './dataContainer';
import Text from './text';

const Description: React.FC = () => {
  return (
    <Flex
      pt='8rem'
      px={['1.6rem', '6rem', '14rem']}
      alignItems='center'
      justify='space-between'
      direction={['column', 'row']}
    >
      <Text />
      <DataContainer />
    </Flex>
  );
}

export default Description;