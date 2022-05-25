import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/c_vr1.JPG'
import AVTR2 from '../../assets/c_vr2.JPG'
import AVTR3 from '../../assets/c_vr3.JPG'
import AVTR4 from '../../assets/c_vr4.JPG'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data=[
  {
    avatar:AVTR1,
    name:'Tina Snow',
    review:'Testimonio prueba testimonio prueba testimonio prueba testimonio prueba testimonio prueba Testimonio prueba testimonio prueba testimonio prueba testimonio prueba testimonio prueba testimonio prueba testimonio prueba?'
  },
  {
    avatar:AVTR2,
    name:'Tina Snow',
    review:'Testimonio prueba testimonio prueba testimonio prueba testimonio prueba testimonio prueba Testimonio prueba testimonio prueba testimonio prueba testimonio prueba testimonio prueba testimonio prueba testimonio prueba?'
  },
  {
    avatar:AVTR3,
    name:'Tina Snow',
    review:'Testimonio prueba testimonio prueba testimonio prueba testimonio prueba testimonio prueba Testimonio prueba testimonio prueba testimonio prueba testimonio prueba testimonio prueba testimonio prueba testimonio prueba?'
  },
  {
    avatar:AVTR4,
    name:'Tina Snow',
    review: 'Testimonio prueba testimonio prueba testimonio prueba testimonio prueba testimonio prueba Testimonio prueba testimonio prueba testimonio prueba testimonio prueba testimonio prueba testimonio prueba testimonio prueba?'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials_container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        {
          data.map(({avatar,name,review},index)=>{
            return(
              <SwiperSlide key={index} className="testimonial">
                <div className="client_avatar">
                  <img src={avatar} />
                </div>
                <h5 className='client_name'>{name}</h5>
                <small className='client_review'>{review}</small>  
              </SwiperSlide>
            )
          })
        }  
      </Swiper>
    </section>
  )
}

export default Testimonials