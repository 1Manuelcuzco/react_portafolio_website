import React from 'react'
import './about.css'

const skills = ['SQL Server', 'JavaScript', 'C', 'REST API', 'Kotlin', 'HTML/CSS', 'JSON', 'HSM']
const career = [
  { role: 'Practicante de Desarrollo', dates: '2021–2023' },
  { role: 'Programador', dates: '2023–2026' },
  { role: 'Analista Programador', dates: '2026–actualidad' }
]

const About = () => (
  <section id="about" className="container about-section">
    <div className="about-panel glass">
      <div className="profile-copy">
        <h2>Perfil y trayectoria</h2>
        <p>Bachiller en Ingeniería de Sistemas con experiencia progresiva en análisis, diseño, desarrollo, pruebas y despliegue de soluciones de software para banca, seguridad de la información, criptografía y comercio electrónico.</p>
        <ol className="career" aria-label="Trayectoria profesional">
          {career.map(({ role, dates }) => (
            <li key={role}><span className="career-dot" aria-hidden="true" /><strong>{role}</strong><time>{dates}</time></li>
          ))}
        </ol>
      </div>
      <div className="skills-block">
        <h2>Habilidades clave</h2>
        <div className="skills-grid">{skills.map(skill => <span className="skill-chip" key={skill}>{skill}</span>)}</div>
      </div>
    </div>
  </section>
)

export default About
