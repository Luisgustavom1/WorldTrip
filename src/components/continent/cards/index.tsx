import { Box, VStack, Heading, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { theme } from '../../../styles/theme';

const Cards: React.FC = () => {
  return (
    <VStack
      w='256px'
      h='279px'
      bg='#FFFFFF'
      borderRadius='4px'
      border='1px'
      borderColor={theme.color.highlight.highlight}
      justify='start'
      align='flex-start'
    >
      <Image 
        src='/assets/Foto.jpg'
        alt='Imagem de amsterdã'
        width='256'
        height='173'
      />
      <Flex
        px='2.4rem'
        py='1.8rem'
        w='100%'
        justify='space-between'
      >
        <VStack
          spacing='1rem'
        >
          <Heading        
            fontFamily='Barlow'
            fontSize='2rem'
            fontWeight='600'
          >
            Amsterdã
          </Heading>
          <Text 
            fontFamily='Barlow'
            fontSize='1.6rem'
            fontWeight='500'
            w='100%'
          >
            Holanda
          </Text>
        </VStack>
        <Image 
          src='/assets/Ellipse 6.svg'
          alt='Svg da bandeira da Holanda'
          width='30'
          height='30'
        />
      </Flex>
    </VStack>
  );
}

export default Cards;