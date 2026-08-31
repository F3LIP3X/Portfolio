export default function Education() {
  return (
    <section id="education">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow reveal">02 — Formación</span>
          <h2 className="section-title reveal" style={{ ['--d' as string]: '60ms' }}>Educación</h2>
        </div>

        <div className="grid grid-3">
          <article className="glass card edu-card reveal">
            <img src="./assets/institutions/stem.png" alt="Logo de Escuela STEM Granada" className="edu-logo" loading="lazy" />
            <h3>Grado Superior en Desarrollo de Aplicaciones Web</h3>
            <p className="institution">Escuela STEM Granada</p>
            <p className="degree">Informática</p>
            <p className="year">Sept. 2024</p>
          </article>

          <article className="glass card edu-card reveal" style={{ ['--d' as string]: '90ms' }}>
            <img src="./assets/institutions/medac.jpg" alt="Logo de MEDAC" className="edu-logo" loading="lazy" />
            <h3>Ciclo Formativo de Grado Superior</h3>
            <p className="institution">MEDAC</p>
            <p className="degree">Desarrollo de Aplicaciones Multiplataforma</p>
            <p className="year">Sept. 2022 — Jul. 2024</p>
          </article>

          <article className="glass card edu-card reveal" style={{ ['--d' as string]: '180ms' }}>
            <img src="./assets/institutions/hlanz.jpg" alt="Logo de IES Politécnico Hermenegildo Lanz" className="edu-logo" loading="lazy" />
            <h3>Ciclo Formativo de Grado Medio</h3>
            <p className="institution">IES Politécnico Hermenegildo Lanz</p>
            <p className="degree">Sistemas Microinformáticos y Redes</p>
            <p className="year">Sept. 2020 — Jun. 2021</p>
          </article>
        </div>
      </div>
    </section>
  )
}
