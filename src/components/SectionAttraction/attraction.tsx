import { VStack, Image, Text, useBreakpointValue, Flex, useMediaQuery } from '@chakra-ui/react';
import React, { useEffect } from 'react';

interface AttractionProps {
  img: string;
  title: string;
}

const Attraction: React.FC<AttractionProps> = ({ img, title}) => {
  
  const [isWideVersion] = useMediaQuery("(min-width: 560px)")

  return (
    <Flex
      direction={isWideVersion ? 'column' : 'row'}
      align='center'
      justify='center'
      wrap='wrap'
      mx='auto'
    >
      <Image 
        src={isWideVersion ? img : './assets/svg/Ellipse 1.svg'} 
        alt={`Svg da ${img}`} 
        mr={isWideVersion ? '' : '.8rem'}
        />
      <Text
        fontSize={['1.8rem', '2.4rem']}
        fontWeight='600'
      >
        {title}
      </Text>
    </Flex>
  );
}

export default Attraction