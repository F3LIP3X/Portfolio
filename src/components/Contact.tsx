export default function Contact() {
  return (
    <section id="contact">
      <div className="wrap">
        <div className="glass contact-card reveal">
          <span className="eyebrow">06 — Contacto</span>
          <h2>¿Trabajamos juntos?</h2>
          <p className="section-sub">Cuéntame tu proyecto. Respondo rápido.</p>
          <a href="mailto:Felitol2008@gmail.com" className="btn btn-primary"><i className="fa-regular fa-envelope"></i>Envíame un correo</a>
          <div className="socials">
            <a href="https://www.linkedin.com/in/felipe-jos%C3%A9-toledano-escudero-4008bb194/" target="_blank" rel="noopener" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
            <a href="https://github.com/F3LIP3X" target="_blank" rel="noopener" aria-label="GitHub"><i className="fab fa-github"></i></a>
            <a href="./assets/CV_Felipe_Toledano.pdf?v=202608" download aria-label="Descargar CV" id="cvDownloadFooter"><i className="fa-solid fa-file-arrow-down"></i></a>
          </div>
        </div>
      </div>
    </section>
  )
}
