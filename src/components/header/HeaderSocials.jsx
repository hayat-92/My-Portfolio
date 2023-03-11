import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href='https://www.linkedin.com/in/faisal-hassan-566bb51a9/' target="_blank"><BsLinkedin /></a>
      <a href='https://github.com/hayat-92' target="_blank"><FaGithub /></a>
      <a href='https://leetcode.com/Faisal_/' target="_blank"><SiLeetcode /></a>
    </div>
  )
}

export default HeaderSocials