import React from 'react'
import './about.css'
import ME from '../../assets/c_vr2.JPG'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>To Know</h5>
      <h2>About me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About image" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>

            <article className='about_card'>
              <FiUsers className='about_icon'/>
              <h5>Clients</h5>
              <small>100+ Perú</small>
            </article>

            <article className='about_card'>
              <VscFolderLibrary className='about_icon'/>
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>
          <p>
            Parrafo de prueba Parrafo de prueba Parrafo de prueba Parrafo de prueba Parrafo de prueba Parrafo de prueba
            Parrafo de prueba Parrafo de pruebaParrafo de pruebaParrafo de prueba Parrafo de prueba Parrafo de prueba 
            Parrafo de prueba Parrafo de prueba Parrafo de prueba Parrafo de prueba
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
    
  )
}

export default About