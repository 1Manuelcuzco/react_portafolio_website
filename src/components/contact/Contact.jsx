import React, { useRef, useState } from 'react'
import './contact.css'
import { FiMail } from 'react-icons/fi'
import { BsLinkedin, BsWhatsapp } from 'react-icons/bs'

const FORM_ENDPOINT = 'https://formsubmit.co/ajax/manuel812e@gmail.com'

const Contact = () => {
  const form = useRef()
  const [status, setStatus] = useState('')
  const [isSending, setIsSending] = useState(false)

  const sendEmail = async (event) => {
    event.preventDefault()
    if (isSending) return
    setIsSending(true)
    setStatus('Enviando…')
    try {
      const formData = new FormData(form.current)
      formData.append('_subject', 'Nuevo mensaje desde el portafolio')
      formData.append('_template', 'table')
      formData.append('_replyto', formData.get('email'))

      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData
      })
      if (!response.ok) throw new Error('No se pudo procesar el formulario')

      form.current.reset()
      setStatus('Mensaje enviado correctamente.')
    } catch {
      setStatus('No se pudo enviar. Escríbeme directamente por correo.')
    } finally {
      setIsSending(false)
    }
  }

  return (
    <section id="contact" className="container contact-section">
      <div className="contact-panel glass">
        <div className="contact-copy">
          <h2>Hablemos de tu próximo proyecto</h2>
          <p>¿Tienes un reto en mente? Estoy disponible para conversar sobre soluciones robustas, seguras y mantenibles.</p>
          <div className="contact-actions">
            <a className="btn" href="mailto:manuel812e@gmail.com"><FiMail aria-hidden="true" /> Enviar correo</a>
            <a className="btn" href="https://linkedin.com/in/manuel-edilberto-cuzco-ramos-805518169" target="_blank" rel="noreferrer"><BsLinkedin aria-hidden="true" /> LinkedIn</a>
            <a className="btn" href="https://api.whatsapp.com/send?phone=51940371162" target="_blank" rel="noreferrer"><BsWhatsapp aria-hidden="true" /> WhatsApp</a>
          </div>
        </div>
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <label className="form-honeypot" aria-hidden="true">No completar<input type="text" name="_honey" tabIndex="-1" autoComplete="off" /></label>
          <div className="form-row">
            <label>Nombre<input type="text" name="name" autoComplete="name" required placeholder="Tu nombre" /></label>
            <label>Correo<input type="email" name="email" autoComplete="email" required placeholder="tu@correo.com" /></label>
          </div>
          <label>Mensaje<textarea name="message" rows="5" required placeholder="Cuéntame sobre tu proyecto…" /></label>
          <button type="submit" className="btn btn-primary" disabled={isSending}>{isSending ? 'Enviando…' : 'Enviar mensaje'}</button>
          <p className="form-status" aria-live="polite">{status}</p>
        </form>
      </div>
    </section>
  )
}

export default Contact
