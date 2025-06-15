import React from 'react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

import './HackathonCarousel.css';

import hackathon1 from '../assets/sih.jpg';
import hackathon2 from '../assets/certificate_sih.jpg';
import hackathon3 from '../assets/nitk.jpg';
import hackathon4 from '../assets/award_dis.jpg';
import hackathon5 from '../assets/group.jpg'; 

const slidesData = [
  { id: 1, src: hackathon1, alt: 'SIH Event 1', label: 'Smart India Hackathon' },
  { id: 2, src: hackathon2, alt: 'Certificate SIH 1', label: 'SIH Certificate' },
  { id: 3, src: hackathon3, alt: 'NITK Event', label: 'NITK Event' },
  { id: 4, src: hackathon4, alt: 'Award Distribution Event', label: 'Award Distribution' },
  { id: 5, src: hackathon5, alt: 'Group Photo', label: 'Group Photo' },
];

function HackathonCarousel() {
  return (
    <section className="hackathon-carousel showcase-slider">
      <h3>
        <span className="carousel-title-gradient">My Achievements & Events</span>
      </h3>
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
        effect="coverflow"
        centeredSlides={true}
        slidesPerView="auto"
        loop={true}
        spaceBetween={30}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 180,
          modifier: 2.5,
          slideShadows: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true, dynamicBullets: true }}
        navigation
        className="coverflow-swiper"
      >
        {slidesData.map(({ id, src, alt, label }) => (
          <SwiperSlide key={id} className="coverflow-slide">
            <div className="slide-img-wrapper">
              <img src={src} alt={alt} className="slide-image" />
              <div className="slide-caption">{label}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default HackathonCarousel;
