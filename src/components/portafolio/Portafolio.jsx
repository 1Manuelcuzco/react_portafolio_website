import React, { useEffect, useRef, useState } from 'react'
import './portafolio.css'
import { FiArrowLeft, FiArrowRight, FiArrowUpRight, FiLock } from 'react-icons/fi'
import FISIOAPP from '../../assets/p_app_fisioapp.jpg'
import ACCESS from '../../assets/p_app_access_control_v2.png'
import FLY from '../../assets/p_app_fly.JPG'
import SIARP from '../../assets/p_web_siarp.JPG'
import SIARP_MINIMAL from '../../assets/p_web_siarp_minimal.png'
import API from '../../assets/p_app_REST-API.JPG'
import LIB from '../../assets/p_lib_db.JPG'
import VR from '../../assets/c_vr1.JPG'

const projects = [
  { title: 'Sistema de gestión de citas de fisioterapia', description: 'Aplicación privada y hecha a medida para gestionar pacientes, citas, tratamientos e instrumentos de fisioterapia.', details: 'Incluye notificaciones por SMS al paciente y un apartado de reportes para facilitar el seguimiento y la gestión del consultorio.', image: FISIOAPP, tags: ['Gestión de citas', 'Notificaciones SMS', 'Reportes'], private: true },
  { title: 'Control de accesos', description: 'Plataforma interna para gestionar empresas, usuarios, aplicaciones y permisos con roles.', details: 'Participé en el diseño y desarrollo de módulos para administrar empresas, usuarios, aplicaciones y permisos, con especial atención al control de acceso y la seguridad.', image: ACCESS, tags: ['JavaScript', 'PostgreSQL', 'Seguridad'], private: true },
  { title: 'Simulador de vuelo RC', description: 'Dashboard SCADA para telemetría de vuelo y control remoto de aeronaves RC.', details: 'Interfaz especializada que integra telemetría, instrumentos de vuelo, geolocalización, estado de señal y controles para aeronaves RC.', image: FLY, tags: ['JavaScript', 'SCADA', 'Telemetría'], private: true },
  { title: 'Sitio web SIARP — versión 1', description: 'Sitio institucional responsive con secciones dinámicas e interacción 3D.', details: 'Sitio público responsive desarrollado con tecnologías web e interacción 3D para presentar las líneas de trabajo y servicios de la empresa.', image: SIARP, tags: ['JavaScript', 'Three.js', 'WebGL'], href: 'https://www.siarperu.com/web/' },
  { title: 'Sitio web minimalista responsivo', description: 'Sitio corporativo tipo SPA para presentar de manera clara toda la información de la empresa.', details: 'Sitio público responsivo desarrollado con framework propietario. Se construyó como SPA y muestra toda la información de la empresa.', image: SIARP_MINIMAL, tags: ['SPA', 'Responsive', 'Framework propietario'], href: 'https://www.siarperu.com/web/' },
  { title: 'API REST para modelos 3D', description: 'Servicios REST con Node.js y SQL Server para una aplicación web con modelos VRM.', details: 'Servicios REST con Node.js y procedimientos almacenados en SQL Server para conectar una experiencia web con modelos 3D.', image: API, tags: ['Node.js', 'SQL Server', 'REST'], private: true },
  { title: 'Librería multibase de datos en C', description: 'Librería para administrar conexiones con distintos motores de bases de datos.', details: 'Componente en C destinado a abstraer conexiones y operaciones con distintos motores de bases de datos dentro de un entorno propietario.', image: LIB, tags: ['C', 'PostgreSQL', 'SQL Server'], private: true },
  { title: 'Interfaz web con avatar 3D', description: 'Experiencia interactiva en navegador para visualizar y presentar un personaje tridimensional.', details: 'Prototipo de interfaz web orientado a la visualización de un avatar 3D dentro de un escenario interactivo.', image: VR, tags: ['JavaScript', 'Three.js', 'VRM'], private: true }
]

const ProjectTags = ({ tags }) => <div className="project-tags">{tags.map(tag => <span key={tag}>{tag}</span>)}</div>

const Portafolio = () => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [detailsOpen, setDetailsOpen] = useState(false)
  const [selectorPage, setSelectorPage] = useState(0)
  const selectorRef = useRef(null)
  const selected = projects[selectedIndex]
  const otherProjects = projects.map((project, index) => ({ project, index })).filter(item => item.index !== selectedIndex)
  const projectPages = Array.from({ length: Math.ceil(otherProjects.length / 4) }, (_, page) => otherProjects.slice(page * 4, page * 4 + 4))

  useEffect(() => {
    setSelectorPage(0)
    selectorRef.current?.scrollTo({ left: 0 })
  }, [selectedIndex])

  const goToPage = page => {
    const nextPage = Math.max(0, Math.min(page, projectPages.length - 1))
    setSelectorPage(nextPage)
    selectorRef.current?.scrollTo({ left: selectorRef.current.clientWidth * nextPage, behavior: 'smooth' })
  }

  const selectProject = index => {
    setSelectedIndex(index)
    setDetailsOpen(true)
    window.requestAnimationFrame(() => {
      const featuredProject = document.querySelector('.featured-project')
      featuredProject?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      featuredProject?.focus({ preventScroll: true })
    })
  }

  return (
    <section id="portafolio" className="container projects-section">
      <div className="section-heading"><h2>Proyectos seleccionados</h2><p>Trabajo aplicado en seguridad, datos e interfaces especializadas.</p></div>
      <div className="project-showcase">
        <article className="featured-project glass" tabIndex="-1">
          <div className="featured-project-image">
            <img className="project-image-blur" src={selected.image} alt="" aria-hidden="true" />
            <img className="project-image-main" src={selected.image} alt={`Vista del proyecto ${selected.title}`} />
          </div>
          <div className="featured-project-content">
            {selected.private && <span className="private-label"><FiLock aria-hidden="true" /> Aplicación privada</span>}
            <h3>{selected.title}</h3>
            <p>{selected.description}</p>
            {detailsOpen && <p className="project-details">{selected.details}</p>}
            <ProjectTags tags={selected.tags} />
            <div className="featured-actions">
              <button className="project-button" type="button" onClick={() => setDetailsOpen(open => !open)} aria-expanded={detailsOpen}>{detailsOpen ? 'Ocultar detalle' : 'Ver detalle'}</button>
              {selected.href && <a className="project-site-link" href={selected.href} target="_blank" rel="noreferrer">Visitar sitio <FiArrowUpRight aria-hidden="true" /></a>}
            </div>
          </div>
        </article>

        <div className="project-selector-wrap">
          <div
            className="project-selector"
            aria-label="Seleccionar otro proyecto"
            ref={selectorRef}
            onScroll={event => setSelectorPage(Math.round(event.currentTarget.scrollLeft / event.currentTarget.clientWidth))}
            onWheel={event => {
              if (projectPages.length > 1 && Math.abs(event.deltaY) > Math.abs(event.deltaX)) event.currentTarget.scrollBy({ left: event.deltaY, behavior: 'smooth' })
            }}
          >
            {projectPages.map((page, pageIndex) => (
              <div className="project-page" key={pageIndex}>
                {page.map(({ project, index }) => (
                  <button className="project-option glass" type="button" key={project.title} onClick={() => selectProject(index)} aria-label={`Ver detalle de ${project.title}`}>
                    <div className="project-option-image">
                      <img className="project-image-blur" src={project.image} alt="" aria-hidden="true" />
                      <img className="project-image-main" src={project.image} alt="" />
                    </div>
                    <div className="project-option-content">
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                    </div>
                  </button>
                ))}
              </div>
            ))}
          </div>
          {projectPages.length > 1 && (
            <div className="project-pagination" aria-label="Navegación de proyectos">
              <button type="button" onClick={() => goToPage(selectorPage - 1)} disabled={selectorPage === 0} aria-label="Proyectos anteriores"><FiArrowLeft aria-hidden="true" /></button>
              <span>{selectorPage + 1} / {projectPages.length}</span>
              <button type="button" onClick={() => goToPage(selectorPage + 1)} disabled={selectorPage === projectPages.length - 1} aria-label="Más proyectos"><FiArrowRight aria-hidden="true" /></button>
            </div>
          )}
        </div>
      </div>
      <p className="privacy-note glass">Algunos proyectos son confidenciales y se presentan mediante resúmenes sin código ni datos sensibles.</p>
    </section>
  )
}

export default Portafolio
