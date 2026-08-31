import { useState } from 'react'
import { useTheme } from '../hooks/useTheme'
import { useActiveSection } from '../hooks/useActiveSection'

const NAV_ITEMS = [
  { id: 'about', label: 'Sobre mí' },
  { id: 'education', label: 'Educación' },
  { id: 'experience', label: 'Experiencia' },
  { id: 'skills', label: 'Habilidades' },
  { id: 'projects', label: 'Proyectos' },
  { id: 'contact', label: 'Contacto' },
]

export default function Nav() {
  const { theme, toggleTheme } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)
  const { activeId, scrolled } = useActiveSection(NAV_ITEMS.map((item) => item.id))

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`} aria-label="Navegación principal">
      <a className="brand" href="#hero" onClick={closeMenu}><span className="dot"></span><span className="name">Felipe Toledano</span></a>

      <ul className={`nav-links${menuOpen ? ' open' : ''}`} id="navLinks">
        {NAV_ITEMS.map((item) => (
          <li key={item.id}>
            <a href={`#${item.id}`} className={activeId === item.id ? 'active' : ''} onClick={closeMenu}>{item.label}</a>
          </li>
        ))}
      </ul>

      <div className="nav-actions">
        <button className="icon-btn" type="button" aria-label="Cambiar tema" onClick={toggleTheme}>
          <i className={theme === 'dark' ? 'fa-solid fa-moon' : 'fa-solid fa-sun'}></i>
        </button>
        <button
          className="icon-btn nav-toggle"
          type="button"
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
          aria-controls="navLinks"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <i className={menuOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'}></i>
        </button>
      </div>
    </nav>
  )
}
