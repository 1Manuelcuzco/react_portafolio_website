import React, { useEffect, useRef, useState } from 'react'
import './nav.css'
import { FiDownload, FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi'
import CV from '../../assets/manuel-cuzco-cv.docx'

const links = [['Inicio', '#home'], ['Perfil', '#about'], ['Experiencia', '#about'], ['Proyectos', '#portafolio'], ['Contacto', '#contact']]

const getInitialTheme = () => {
  try {
    const savedTheme = window.localStorage.getItem('portfolio-theme')
    if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme
  } catch {}
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

const Nav = () => {
  const [open, setOpen] = useState(false)
  const [visible, setVisible] = useState(true)
  const [morphing, setMorphing] = useState(false)
  const [nameArrived, setNameArrived] = useState(false)
  const [theme, setTheme] = useState(getInitialTheme)
  const brandRef = useRef(null)
  const openRef = useRef(open)
  const lastScroll = useRef(0)
  const hasMorphed = useRef(false)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.documentElement.style.colorScheme = theme
    try { window.localStorage.setItem('portfolio-theme', theme) } catch {}
  }, [theme])

  useEffect(() => {
    openRef.current = open
    if (open) setVisible(true)
  }, [open])

  useEffect(() => {
    let ticking = false
    let revealUntil = 0
    let activeClone = null
    let accumulatedScroll = 0
    let previousDirection = 0

    const restoreHeroName = () => {
      const heroName = document.querySelector('.hero-name')
      heroName?.classList.remove('is-morphing', 'is-collapsed')
      hasMorphed.current = false
      setMorphing(false)
      setNameArrived(false)
    }

    const morphHeroName = () => {
      const heroName = document.querySelector('.hero-name')
      const brand = brandRef.current
      if (!heroName || !brand || hasMorphed.current) return

      hasMorphed.current = true
      revealUntil = performance.now() + 950
      setVisible(true)

      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        heroName.classList.add('is-collapsed')
        setNameArrived(true)
        return
      }

      const source = heroName.getBoundingClientRect()
      const target = brand.getBoundingClientRect()
      const sourceStyle = window.getComputedStyle(heroName)
      const scale = target.height / source.height

      activeClone = document.createElement('span')
      activeClone.className = 'name-flight'
      activeClone.setAttribute('aria-hidden', 'true')
      const fullName = document.createElement('span')
      const initials = document.createElement('span')
      fullName.className = 'name-flight-full'
      initials.className = 'name-flight-initials'
      fullName.textContent = 'Manuel Cuzco'
      initials.textContent = 'MC'
      activeClone.append(fullName, initials)
      Object.assign(activeClone.style, {
        left: `${source.left}px`,
        top: `${source.top}px`,
        fontSize: sourceStyle.fontSize,
        fontWeight: sourceStyle.fontWeight,
        letterSpacing: sourceStyle.letterSpacing
      })
      document.body.appendChild(activeClone)
      heroName.classList.add('is-morphing')
      setMorphing(true)

      const animation = activeClone.animate([
        { transform: 'translate3d(0, 0, 0) scale(1)', opacity: 1 },
        { transform: `translate3d(${(target.left - source.left) * .72}px, ${(target.top - source.top) * .72}px, 0) scale(${Math.max(scale * 1.5, .45)})`, opacity: .96, offset: .62 },
        { transform: `translate3d(${target.left - source.left}px, ${target.top - source.top}px, 0) scale(${scale})`, opacity: 0 }
      ], { duration: 920, easing: 'cubic-bezier(.2,.72,.2,1)', fill: 'forwards' })

      fullName.animate([
        { opacity: 1, filter: 'blur(0)' },
        { opacity: 1, filter: 'blur(0)', offset: .34 },
        { opacity: 0, filter: 'blur(5px)', offset: .62 },
        { opacity: 0, filter: 'blur(5px)' }
      ], { duration: 920, easing: 'ease-out', fill: 'forwards' })
      initials.animate([
        { opacity: 0, filter: 'blur(5px)' },
        { opacity: 0, filter: 'blur(5px)', offset: .32 },
        { opacity: 1, filter: 'blur(0)', offset: .62 },
        { opacity: 1, filter: 'blur(0)' }
      ], { duration: 920, easing: 'ease-out', fill: 'forwards' })

      animation.finished.finally(() => {
        activeClone?.remove()
        activeClone = null
        heroName.classList.remove('is-morphing')
        heroName.classList.add('is-collapsed')
        setMorphing(false)
        setNameArrived(true)
      })
    }

    const updateNavigation = () => {
      const currentScroll = window.scrollY
      const about = document.querySelector('#about')
      const profileEntering = about && about.getBoundingClientRect().top <= window.innerHeight * .82

      if (profileEntering) morphHeroName()
      else if (hasMorphed.current) restoreHeroName()

      const scrollDelta = currentScroll - lastScroll.current
      const direction = Math.sign(scrollDelta)
      if (direction && direction === previousDirection) accumulatedScroll += scrollDelta
      else if (direction) accumulatedScroll = scrollDelta
      if (direction) previousDirection = direction

      if (openRef.current || currentScroll < 80 || performance.now() < revealUntil) {
        setVisible(true)
        accumulatedScroll = 0
      } else if (accumulatedScroll >= 42) {
        setVisible(false)
        accumulatedScroll = 0
      } else if (accumulatedScroll <= -30) {
        setVisible(true)
        accumulatedScroll = 0
      }

      lastScroll.current = currentScroll
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateNavigation)
        ticking = true
      }
    }

    lastScroll.current = window.scrollY
    updateNavigation()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      activeClone?.remove()
      document.querySelector('.hero-name')?.classList.remove('is-morphing', 'is-collapsed')
    }
  }, [])

  return (
    <nav className={`site-nav glass ${visible ? 'nav-visible' : 'nav-hidden'} ${morphing ? 'name-morphing' : ''}`} aria-label="Navegación principal">
      <a ref={brandRef} className={`nav-brand ${nameArrived ? 'name-arrived' : ''}`} href="#home" aria-label="Ir al inicio">MC</a>
      <button className="nav-toggle" type="button" aria-expanded={open} aria-controls="nav-links" onClick={() => setOpen(!open)}>
        {open ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
        <span className="sr-only">Abrir menú</span>
      </button>
      <div id="nav-links" className={`nav-links ${open ? 'open' : ''}`}>
        {links.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>)}
      </div>
      <a className="nav-cv btn" href={CV} download>Descargar CV <FiDownload aria-hidden="true" /></a>
      <button className="nav-theme btn" type="button" onClick={() => setTheme(current => current === 'dark' ? 'light' : 'dark')} aria-label={theme === 'dark' ? 'Activar modo claro' : 'Activar modo oscuro'} title={theme === 'dark' ? 'Modo claro' : 'Modo oscuro'}>
        {theme === 'dark' ? <FiSun aria-hidden="true" /> : <FiMoon aria-hidden="true" />}
      </button>
    </nav>
  )
}

export default Nav
