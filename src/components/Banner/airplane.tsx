import { Box, Image } from '@chakra-ui/react';
import React from 'react';


const Airplane: React.FC = () => {
  return (
    <Box pos='relative' top='55px'>
      <Image 
        w='417px' 
        h='270px' 
        src='./assets/svg/airplane.svg' 
        alt='svg da ilustração de um aviao'
        ml='40px'
      />
    </Box>
  );
}

export default Airplane;