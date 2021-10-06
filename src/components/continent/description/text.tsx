import { Flex } from '@chakra-ui/react';
import React from 'react';

const Text: React.FC = () => {
  return (
    <Flex
      fontSize={['1.4rem', '2.4rem']}
      maxWidth='60rem'
    >
      A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
    </Flex>
  );
}

export default Text;