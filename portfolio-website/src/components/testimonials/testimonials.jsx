import React from 'react'
import './testimonials.css'
import data from './testimonialData'

// import Swiper core and required modules
import { Pagination, Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const testimonials = () => {
  return (
    <section id="testimonials">
      <h5>What Clients Are Saying</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials_container"
            // install Swiper modules
            modules={ [Pagination] }
            spaceBetween={40}
            slidesPerView={1}
            pagination={{ clickable: true }}
      >
        {
          data.map(({avatar, name, Review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client_avatar">
                  <img src={avatar} alt="" />
                </div>
                <h5 className="client_name">{name}</h5>
                <small className="client_review">{Review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default testimonials