import { Divider } from '@chakra-ui/react';
import type { NextPage } from 'next'
import Banner from '../components/Banner'
import Attraction from '../components/SectionAttraction';
import { theme } from '../styles/theme';

const Home: NextPage = () => {
  return (
    <>
      <Banner />
      <Attraction />
      <Divider 
        mx='auto'
        w='9rem'
        height='0.2rem'
        bg={theme.color.dark.headingAndTexts}
      />
    </>
  )
}

export default Home
