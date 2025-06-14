import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './HackathonCarousel.css';

import hackathon1 from '../assets/sih.jpg';
import hackathon2 from '../assets/certificate_sih.jpg';

const slidesData = [
  { id: 1, src: hackathon1, alt: 'SIH Event 1' },
  { id: 2, src: hackathon2, alt: 'Certificate SIH 1' },
  { id: 3, src: hackathon1, alt: 'SIH Event 2' },
  { id: 4, src: hackathon2, alt: 'Certificate SIH 2' },
];

function HackathonCarousel() {
  return (
    <section className="hackathon-carousel showcase-slider">
      <h3>My Achievements & Events</h3>
      <Carousel
        showThumbs={false}
        infiniteLoop
        autoPlay
        showStatus={false}
        showArrows={true}
        showIndicators={true}
        interval={3500}
        transitionTime={600}
        swipeable
        emulateTouch
        axis="horizontal"
        dynamicHeight={false}
        swipeScrollTolerance={5}
        stopOnHover={true}
      >
        {slidesData.map(({ id, src, alt }) => (
          <div key={id} className="carousel-slide-row">
            <img src={src} alt={alt} className="slide-image" />
          </div>
        ))}
      </Carousel>
    </section>
  );
}

export default HackathonCarousel;
