import { Center, Image } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';

const Header: React.FC = () => {
  const router = useRouter();

  return (
    <Center as='header' py={['15px', '27px']}>
      <Image 
        src='./assets/svg/Logo.svg' 
        alt='Svg da logo'
        w={['81px', 'auto']}
        onClick={() => router.push({
          pathname: '/'
        })}
      />
    </Center>
  );
}

export default Header;