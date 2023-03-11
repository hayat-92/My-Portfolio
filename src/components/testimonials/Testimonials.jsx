import React from 'react'
import "./Testimonials.css"
import { BiCheck } from 'react-icons/bi'
import AVTR1 from '../../assets/CN.jpeg'
import AVTR2 from '../../assets/INFA.png'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR1,
    name: 'Teaching Assistant | Jan 2022-May 2022',
    review: ["Key responsibilities were to take doubt sessions, debug code", "Guided undergraduate students in understanding data structures and algorithms.", "Cleared 600+ doubts of students regarding Data Structure and Algorithm in java.", "Help students in their assignments various projects."]
  },
  {
    avatar: AVTR2,
    name: 'Full Stack Intern | INFA technologies | Jan 2022-May 2022',
    review: ["Worked as a Full Stack developer using modern web development framework i.e. React and AntDesign to build interactiveweb apps.", "Developed Authentication for an E-commerce web App containing both manual and google Auth2 features.", "Built Cart Component and product component for an Ecommerce web app using Ant design and ReactJS."]
  },

  // {
  //   avatar: AVTR3,
  //   name: 'Faisal Hassan',
  //   review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus sequi omnis adipisci soluta ea earum commodi exercitationem, molestiae enim perspiciatis impedit laudantium corrupti quod nesciunt cum voluptates consequuntur eligendi repudiandae.'
  // },
  // {
  //   avatar: AVTR4,
  //   name: 'Faisal Hassan',
  //   review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus sequi omnis adipisci soluta ea earum commodi exercitationem, molestiae enim perspiciatis impedit laudantium corrupti quod nesciunt cum voluptates consequuntur eligendi repudiandae.'
  // },
]
const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>About Internship</h5>
      <h2>Internship</h2>
      <Swiper className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {
          data.map(({ avatar, name, review }, index) => {
            return (<SwiperSlide key={index} className="testmonial">
              <div className="client__avatar">
                <img src={avatar} alt="Avatar One" />
              </div>
              <h5 className="client__name">
                {name}
              </h5>
              <ul className="client__list">
                {review.map((e) => {
                  return <li>
                    <BiCheck className="service__list-icon" />
                    <p className="client__review">
                      {e}
                    </p>
                  </li>
                })}


              </ul>



            </SwiperSlide>)
          })
        }

      </Swiper>
    </section>
  )
}

export default Testimonials