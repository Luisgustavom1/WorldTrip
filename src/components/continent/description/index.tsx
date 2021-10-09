import { Flex, useMediaQuery } from '@chakra-ui/react';
import React from 'react';
import { info } from '../../../types';
import DataContainer from './dataContainer';
import Text from './text';

interface DescriptionProps {
  description: string,
  info: info
}

const Description = ({ description, info }: DescriptionProps) => {
  
  const [isWideVersion] = useMediaQuery("(min-width: 1200px)");

  return (
    <Flex
      pt='7rem'
      px={['1.6rem' , '14rem']}
      alignItems='center'
      justify='space-between'
      direction={isWideVersion ? 'row' : 'column'}
    >
      <Text 
        description={description}
      />
      <DataContainer 
        info={info}
      />
    </Flex>
  );
}

export default Description;