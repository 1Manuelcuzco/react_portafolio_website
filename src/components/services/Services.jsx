import React from 'react'
import './services.css'

const steps = [
  { number: '01', title: 'Analizo', text: 'Entiendo el problema, los datos y el contexto del negocio.' },
  { number: '02', title: 'Construyo', text: 'Diseño y desarrollo soluciones seguras, mantenibles y escalables.' },
  { number: '03', title: 'Valido', text: 'Realizo pruebas, atiendo observaciones y acompaño el despliegue.' }
]

const Services = () => (
  <section className="container workflow-section" aria-labelledby="workflow-title">
    <div className="workflow glass">
      <h2 id="workflow-title">Cómo trabajo</h2>
      <div className="workflow-steps">
        {steps.map(step => <article key={step.number}><span>{step.number}</span><div><h3>{step.title}</h3><p>{step.text}</p></div></article>)}
      </div>
    </div>
  </section>
)

export default Services
