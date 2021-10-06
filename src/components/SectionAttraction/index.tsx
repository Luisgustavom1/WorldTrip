import { HStack, Flex } from '@chakra-ui/react';

import Attraction from './attraction';

const SectionAttraction: React.FC = () => {
  return (
    <Flex
      px={['5rem', '14rem']}
      mt='10rem'
      mb='8rem'
      justify='space-between'
      align='center'
      wrap='wrap'
    >
      <Attraction 
        img='./assets/svg/cocktail 1.svg'
        title='vida noturna'
      />
      <Attraction 
        img='./assets/svg/surf 1.svg'
        title='praia'
      />
      <Attraction 
        img='./assets/svg/building 1.svg'
        title='moderno'
      />
      <Attraction 
        img='./assets/svg/museum 1.svg'
        title='clássico'
      />
      <Attraction 
        img='./assets/svg/earth 1.svg'
        title='e mais...'
      />
    </Flex>
  );
}

export default SectionAttraction;