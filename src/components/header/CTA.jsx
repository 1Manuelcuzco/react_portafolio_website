import React from 'react'
import { FiArrowRight, FiMail } from 'react-icons/fi'

const CTA = () => (
  <div className="cta">
    <a href="#portafolio" className="btn btn-primary">Ver proyectos <FiArrowRight aria-hidden="true" /></a>
    <a href="#contact" className="btn">Contactar <FiMail aria-hidden="true" /></a>
  </div>
)

export default CTA
