import { Box, VStack, Heading, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { theme } from '../../../styles/theme';

interface CardsProps {
  city: string;
  country: string;
  img: string
}

const Cards = ({ city, country, img }: CardsProps) => {
  return (
    <VStack
      w='256px'
      h='279px'
      bg='#FFFFFF'
      borderRadius='4px'
      border='1px'
      borderColor={theme.color.highlight.highlight}
      mb='4.8rem'
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
          textAlign='left'
        >
          <Heading        
            fontFamily='Barlow'
            fontSize='2rem'
            fontWeight='600'
          >
            {city}
          </Heading>
          <Text 
            fontFamily='Barlow'
            fontSize='1.6rem'
            fontWeight='500'
            w='100%'
          >
            {country}
          </Text>
        </VStack>
        <Image 
          src={img}
          alt='Svg da bandeira da Holanda'
          width='30'
          height='30'
          objectFit='contain'
        />
      </Flex>
    </VStack>
  );
}

export default Cards;