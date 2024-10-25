import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import './ImageSlider.css';

import image1 from "../../assets/images/eka/img1/converted/main1.jpg";
import image3 from "../../assets/images/eka/img3/converted/main1.jpg";
import image4 from "../../assets/images/Lee/main1.jpg";
import image5 from "../../assets/images/alexandria/img1/main1.jpg";
import image6 from "../../assets/images/alexandria/img2/main1.jpg";
import image8 from "../../assets/images/Cenacolo/main1.jpg";

const slides = [
    { image: image1 },
    { image: image3 },
    { image: image4 },
    { image: image5 },
    { image: image6 },
    { image: image8 },
];

export default function ImageSlider() {
  return (
    <Swiper
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={'auto'}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={true}
      modules={[EffectCoverflow, Pagination]}
      className="mySwiper"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <img src={slide.image} alt={`Slide ${index + 1}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
