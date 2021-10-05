import { Center,Image } from '@chakra-ui/react';
import React from 'react';

const Header: React.FC = () => {
  return (
    <Center as='header' py={['15px', '27px']}>
      <Image 
        src='./assets/svg/logo.svg' 
        alt='Svg da logo'
        w={['81px', 'auto']}
        />
    </Center>
  );
}

export default Header;