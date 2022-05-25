import React from 'react'
import './portafolio.css'
import IMG1 from '../../assets/c_vr3.JPG'
import IMG2 from '../../assets/c_vr4.JPG'
import IMG3 from '../../assets/c_vr2.JPG'
import IMG4 from '../../assets/c_vr1.JPG'
import IMG5 from '../../assets/c_vr2.JPG'
import IMG6 from '../../assets/c_vr3.JPG'

const data=[
  {
    id:1,
    image:IMG1,
    title:'Crypto Currency Dashboard & Financial Visualization',
    github:'https://github.com',
    demo:'https://github.com'
  },
  {
    id:2,
    image:IMG2,
    title:'Crypto Currency Dashboard & Financial Visualization',
    github:'https://github.com',
    demo:'https://github.com'
  },
  {
    id:3,
    image:IMG3,
    title:'Crypto Currency Dashboard & Financial Visualization',
    github:'https://github.com',
    demo:'https://github.com'
  },
  {
    id:4,
    image:IMG4,
    title:'Crypto Currency Dashboard & Financial Visualization',
    github:'https://github.com',
    demo:'https://github.com'
  },
  {
    id:5,
    image:IMG5,
    title:'Crypto Currency Dashboard & Financial Visualization',
    github:'https://github.com',
    demo:'https://github.com'
  },
  {
    id:6,
    image:IMG6,
    title:'Crypto Currency Dashboard & Financial Visualization',
    github:'https://github.com',
    demo:'https://github.com'
  }
]

const Portafolio = () => {
  return (
    <section id='portafolio'>
      <h5>My Recent Work</h5>
      <h2>Portafolio</h2>
      <div className="container portafolio_container">
        {
          data.map(({id,image,title,github,demo})=>{
            return(
              <article key={id} className="portafolio_item">
                <div className="portafolio_item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portafolio_item-cta">
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portafolio