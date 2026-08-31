export default function Nav() {
  return (
    <nav className="nav" id="nav" aria-label="Navegación principal">
      <a className="brand" href="#hero"><span className="dot"></span><span className="name">Felipe Toledano</span></a>

      <ul className="nav-links" id="navLinks">
        <li><a href="#about">Sobre mí</a></li>
        <li><a href="#education">Educación</a></li>
        <li><a href="#experience">Experiencia</a></li>
        <li><a href="#skills">Habilidades</a></li>
        <li><a href="#projects">Proyectos</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>

      <div className="nav-actions">
        <button className="icon-btn" id="themeBtn" type="button" aria-label="Cambiar tema">
          <i className="fa-solid fa-moon" id="themeIcon"></i>
        </button>
        <button className="icon-btn nav-toggle" id="navToggle" type="button" aria-label="Abrir menú" aria-expanded="false" aria-controls="navLinks">
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>
    </nav>
  )
}
