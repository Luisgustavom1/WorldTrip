import { Flex, useMediaQuery } from '@chakra-ui/react';
import React from 'react';
import DataContainer from './dataContainer';
import Text from './text';

const Description: React.FC = () => {
  
  const [isWideVersion] = useMediaQuery("(min-width: 1200px)");

  return (
    <Flex
      pt='8rem'
      px={['1.6rem' , '14rem']}
      alignItems='center'
      justify='space-between'
      direction={isWideVersion ? 'row' : 'column'}
    >
      <Text />
      <DataContainer />
    </Flex>
  );
}

export default Description;