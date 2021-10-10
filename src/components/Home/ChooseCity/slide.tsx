import Router from 'next/router'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation"
import "swiper/css/pagination"

// import Swiper core and required modules
import SwiperCore, {
  Navigation, Pagination, Mousewheel, Keyboard
} from 'swiper';
import TextsOfSlide from "./textsOfSlide";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);

export default function App() {
  return (
    <>
    <Swiper cssMode={true} navigation={true} pagination={true} mousewheel={true} keyboard={true} className="mySwiper">
      <SwiperSlide
        onClick={() => Router.push('/europe')}
      >
        <TextsOfSlide 
          continent='Europa'
          description='O continente mais antigo.'
        />
      </SwiperSlide>
      <SwiperSlide
        onClick={() => Router.push('/southAmerica')}
      >
        <TextsOfSlide 
          continent='America Do Sul'
          description='O continente mais belo.'
        />
      </SwiperSlide>
      <SwiperSlide
        onClick={() => Router.push('/northAmerica')}
      >
        <TextsOfSlide 
          continent='America Do Norte'
          description='O continente mais rico.'
        />
      </SwiperSlide>
      <SwiperSlide
        onClick={() => Router.push('/oceania')}
      >
        <TextsOfSlide 
          continent='Oceania'
          description='O continente mais paradisíaco.'
        />
      </SwiperSlide>
      <SwiperSlide
        onClick={() => Router.push('/asia')}
      >
        <TextsOfSlide 
          continent='Asia'
          description='O maior continente.'
        />
      </SwiperSlide>
      <SwiperSlide
        onClick={() => Router.push('/africa')}
      >
        <TextsOfSlide 
          continent='Africa'
          description='O continente com maior diversidade.'
        />
      </SwiperSlide>
    </Swiper>
    </>
  )
}