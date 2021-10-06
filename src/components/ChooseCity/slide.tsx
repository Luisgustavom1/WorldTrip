import React from "react";
import { Text, Heading, VStack } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation"
import "swiper/css/pagination"

// import Swiper core and required modules
import SwiperCore, {
  Navigation, Pagination, Mousewheel, Keyboard
} from 'swiper';
import { theme } from "../../styles/theme";
import TextsOfSlide from "./textsOfSlide";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);

export default function App() {
  return (
    <>
    <Swiper cssMode={true} navigation={true} pagination={true} mousewheel={true} keyboard={true} className="mySwiper">
      <SwiperSlide>
        <TextsOfSlide 
          continent='Europa'
          description='O país mais antigo.'
        />
      </SwiperSlide>
      <SwiperSlide>
        <TextsOfSlide 
          continent='Europa'
          description='O país mais antigo.'
        />
      </SwiperSlide>
      <SwiperSlide>
        <TextsOfSlide 
          continent='Europa'
          description='O país mais antigo.'
        />
      </SwiperSlide>
      <SwiperSlide>
        <TextsOfSlide 
          continent='Europa'
          description='O país mais antigo.'
        />
      </SwiperSlide>
      <SwiperSlide>
        <TextsOfSlide 
          continent='Europa'
          description='O país mais antigo.'
        />
      </SwiperSlide>
      <SwiperSlide>
        <TextsOfSlide 
          continent='Europa'
          description='O país mais antigo.'
        />
      </SwiperSlide>
    </Swiper>
    </>
  )
}