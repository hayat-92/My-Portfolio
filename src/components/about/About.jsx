import React from 'react'
import './About.css'
// import ME from '../../assets/me-about.jpg'
import ME from '../../assets/about.svg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'
import { SiLeetcode } from 'react-icons/si'
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt='About Image' />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>

            <article className='about__card'>
              <SiLeetcode className='about__icon' />
              <h5>Leetcode</h5>
              <small>700+ problems solved</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>7+ Completed</small>
            </article>
          </div>
          <p>
            Hi there! My name is Faisal Hassan and I am a fourth-year computer science student with a strong background in data structures and algorithms (DSA) and a passion for full-stack development using the MERN stack.

            I have also gained valuable hands-on experience through internships and personal projects, where I have had the opportunity to apply my skills and knowledge to real-world challenges.
          </p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About