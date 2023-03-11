import React from 'react'
import { BiCheck } from 'react-icons/bi'
import "./Services.css"
const Services = () => {
  return (
    <section id='services'>
      <h5>What I have achieved</h5>
      <h2>Achievements</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>DSA</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>I am quit active on leetcode.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>I have solved more than 700 questions.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>I have participated in 30+ contests of leetcode.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>I am under top 11% on leetcode</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>I have 1700+ contest rating on leetcode.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Successfully completed a 4-month TAship at Coding Ninjas.</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>Full Stack Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Successfully completed 7+ personal projects using the MERN stack, including a social media platform and a e-commerce website</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Successfully completed a 3-month internship at INFA Technologies.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>During Internship. I worked on the development of a web-based application using the MERN stack.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Collaborated with cross-functional teams to deliver high-quality software solutions on time.</p>
            </li>
            {/* <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li> */}
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}
        <article className="service">
          <div className="service__head">
            <h3>Other</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Completed a certification in Operating System and DBMS concepts. </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Have a strong understanding of key concepts in operating system.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Enhanced my skills and knowledge in operating system concepts, including concurrency, scheduling, and memory management</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Enhanced my skills and knowledge in database concepts, including data modeling, SQL, and database performance optimization.</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  )
}

export default Services