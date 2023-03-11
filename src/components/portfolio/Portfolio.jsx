import React from 'react'
import "./Portfolio.css"
import IMG1 from '../../assets/oc-home.jpg'
import IMG2 from '../../assets/movie.jpg'
import IMG3 from '../../assets/xflix.png'
import IMG4 from '../../assets/chat.png'
import IMG5 from '../../assets/qkart.jpg'
import IMG6 from '../../assets/portfolio6.jpg'
const data = [
  {
    id: 1,
    image: IMG1,
    title: 'OLX Clone',
    github: 'https://github.com/hayat-92/olx-clone',
    demo: 'https://olx-clone-seven.vercel.app/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Movie Discovery App',
    github: 'https://github.com/hayat-92/assignment-movie',
    demo: 'https://hayat-92.github.io/assignment-movie/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Video Streaming Platform',
    github: 'https://github.com/hayat-92/XFlix_',
    demo: 'https://github.com/hayat-92/XFlix_'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Chat App',
    github: 'https://github.com/hayat-92/chat-app',
    demo: 'https://github.com/hayat-92/chat-app'
  },
  {
    id: 5,
    image: IMG5,
    title: '(Qkart) Ecommerce Web App',
    github: 'https://github.com/hayat-92/QKart-app',
    demo: 'https://qkart-backend.netlify.app/'
  },
]
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>
      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className="btn" target="_blank">
                    Github
                  </a>
                  <a href={demo} className="btn btn-primary">Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio