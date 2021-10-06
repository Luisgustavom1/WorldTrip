import { Divider } from '@chakra-ui/react';
import type { NextPage } from 'next'
import Head from 'next/Head';
import Banner from '../components/Home/Banner'
import ChooseCity from '../components/Home/ChooseCity';
import Attraction from '../components/Home/SectionAttraction';
import { theme } from '../styles/theme';

const Home: NextPage = () => {
  return (
    <> 
      <Head>
        <title>
          WorldTrip
        </title>
      </Head>
      <Banner />
      <Attraction />
      <Divider 
        mx='auto'
        w='9rem'
        height='0.2rem'
        bg={theme.color.dark.headingAndTexts}
      />
      <ChooseCity />
    </>
  )
}

export default Home
