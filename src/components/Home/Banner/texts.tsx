import { VStack, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { theme } from '../../../styles/theme';

const Texts: React.FC = () => {
  return (
    <VStack
      pt={['2.8rem', '8rem']}
      pb={['2.8rem', '7rem']}
      spacing={['.8rem', '2rem']}
      align="stretch"
    >
      <Heading 
        fontSize={['2rem', '3.5rem']}
        fontWeight='500'
        color={theme.color.light.headingAndTexts}
        maxWidth={['238px', '426px']}
      >
        5 Continentes, <br/> infinitas possibilidades.
      </Heading>
      <Text
        fontSize={['1.4rem', '2rem']}
        color={theme.color.light.info}
        maxWidth={['333px', '524px']}
      >
        Chegou a hora de tirar do papel a viagem que você sempre sonhou. 
      </Text>
    </VStack>
  );
}

export default Texts;