export default function Hero() {
  return (
    <header id="hero">
      <div className="wrap hero-inner">
        <span className="eyebrow reveal r-soft"><span className="live"></span>Full Stack · React &amp; NestJS · Granada</span>

        <h1 className="hero-title reveal r-soft" style={{ ['--d' as string]: '170ms' }}>
          Hola, soy Felipe
          <span className="line-2">Full Stack Developer</span>
        </h1>

        <p className="hero-lead reveal" style={{ ['--d' as string]: '260ms' }}>
          Construyo interfaces rápidas, accesibles y cuidadas al detalle.
          React, Angular y Vue en el front; NestJS, Laravel y Spring en el back.
        </p>

        <div className="hero-actions reveal" style={{ ['--d' as string]: '340ms' }}>
          <a href="#projects" className="btn btn-primary"><i className="fa-solid fa-layer-group"></i>Ver proyectos</a>
          <a href="#contact" className="btn"><i className="fa-regular fa-envelope"></i>Contactar</a>
          <a href="./assets/CV_Felipe_Toledano.pdf?v=202608" className="btn" download id="cvDownload"><i className="fa-solid fa-arrow-down"></i>Descargar CV</a>
        </div>

        <div className="hero-meta" data-stagger="70">
          <span className="pill pop"><i className="fa-solid fa-location-dot"></i>Granada, España</span>
          <span className="pill pop"><i className="fa-solid fa-briefcase"></i>QUANTIA · Full Stack</span>
          <span className="pill pop"><i className="fa-solid fa-rocket"></i>MVPs de producto end-to-end</span>
        </div>

        <div className="scroll-hint" aria-hidden="true">
          <span>Scroll</span>
          <i className="fa-solid fa-chevron-down"></i>
        </div>
      </div>
    </header>
  )
}
