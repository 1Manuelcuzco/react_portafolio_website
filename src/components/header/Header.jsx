import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/img_profil.png'

const Header = () => (
  <header className="hero" id="home">
    <div className="container hero-grid">
      <div className="hero-copy">
        <p className="eyebrow">Ingeniero de Sistemas</p>
        <h1 className="hero-name">Manuel Cuzco</h1>
        <p className="hero-lead">Desarrollo soluciones de software seguras, escalables y mantenibles para entornos críticos y regulados, con foco en calidad, eficiencia y valor para el negocio.</p>
        <CTA />
        <div className="hero-facts glass" aria-label="Resumen profesional">
          <div><strong>4+</strong><span>años de experiencia</span></div>
          <div><strong>Banca y</strong><span>seguridad</span></div>
          <div><strong>Software web</strong><span>y datos</span></div>
        </div>
      </div>
      <div className="portrait glass">
        <div className="portrait-inner"><img src={ME} alt="Ilustración de Manuel Cuzco" /></div>
      </div>
    </div>
  </header>
)

export default Header
