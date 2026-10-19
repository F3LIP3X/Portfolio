import Stat from './Stat'

function yearsOfExperience() {
  const first = new Date('2024-03-01')
  return Math.max(1, Math.floor((Date.now() - first.getTime()) / (86400000 * 365.25)))
}

export default function About() {
  return (
    <section id="about">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow reveal">01 — Perfil</span>
          <h2 className="section-title reveal" style={{ ['--d' as string]: '60ms' }}>Sobre mí</h2>
          <p className="section-sub reveal" style={{ ['--d' as string]: '120ms' }}>Desarrollo aplicaciones web modernas combinando front-end y back-end, con foco en la experiencia de usuario.</p>
        </div>

        <div className="about-grid">
          <figure className="glass about-photo reveal r-left">
            <img src="./assets/archivo18.jpg" alt="Retrato de Felipe Toledano" loading="lazy" width={480} height={480} />
            <figcaption>Felipe Toledano · Granada</figcaption>
            <div className="mini-links">
              <a href="https://github.com/F3LIP3X" target="_blank" rel="noopener" aria-label="GitHub"><i className="fab fa-github"></i></a>
              <a href="https://www.linkedin.com/in/felipe-toledano-escudero" target="_blank" rel="noopener" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
              <a href="mailto:Felitol2008@gmail.com" aria-label="Email"><i className="fa-regular fa-envelope"></i></a>
            </div>
          </figure>

          <div className="glass about-card reveal r-right" style={{ ['--d' as string]: '120ms' }}>
            <p>
              Soy desarrollador Full Stack. Me especializo en aplicaciones web modernas y eficientes,
              combinando tecnologías front-end y back-end.
            </p>
            <p>
              Mi formación en Desarrollo de Aplicaciones Multiplataforma (DAM) y Desarrollo de Aplicaciones
              Web (DAW) me ha dado una base sólida en programación y arquitectura de software. Me apasiona
              especialmente el front-end, donde combino creatividad y técnica para crear interfaces
              intuitivas y atractivas.
            </p>
            <p>
              Actualmente amplío conocimientos en React, Node.js y bases de datos SQL y NoSQL. Mi objetivo
              es crear soluciones que no solo funcionen bien, sino que ofrezcan una experiencia excelente.
            </p>

            <ul className="learn-list">
              <li><i className="fa-solid fa-check"></i>Desarrollo web full-stack con tecnologías modernas</li>
              <li><i className="fa-solid fa-check"></i>Implementación de APIs RESTful</li>
              <li><i className="fa-solid fa-check"></i>Diseño y gestión de bases de datos</li>
              <li><i className="fa-solid fa-check"></i>Control de versiones y metodologías ágiles</li>
              <li><i className="fa-solid fa-check"></i>Desarrollo de aplicaciones móviles nativas</li>
            </ul>

            <div className="stat-row">
              <Stat target={yearsOfExperience()} prefix="+" label="Años de experiencia" />
              <Stat target={30} label="Tecnologías" />
              <Stat target={9} label="Proyectos destacados" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
