import { VStack, Heading, Text } from '@chakra-ui/react';
import { theme } from '../../../styles/theme';

interface TextsOfSlideProps {
  continent: string;
  description: string;
}

const TextsOfSlide: React.FC<TextsOfSlideProps> = ({ continent, description }) => {
  return (
    <VStack
      color={theme.color.light.headingAndTexts}
      fontWeight='700'
    >
      <Heading
        fontSize={['2.4rem', '4.8rem']}
      >
        {continent}
      </Heading>
      <Text
        fontSize={['1.4rem', '2.4rem']}
      >
        {description}
      </Text>
    </VStack>
  );
}

export default TextsOfSlide;