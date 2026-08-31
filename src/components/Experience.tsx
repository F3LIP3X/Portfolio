export default function Experience() {
  return (
    <section id="experience">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow reveal">03 — Trayectoria</span>
          <h2 className="section-title reveal" style={{ ['--d' as string]: '60ms' }}>Experiencia</h2>
        </div>

        <div className="timeline">
          {/* QUANTIA */}
          <article className="glass exp-card featured reveal">
            <div className="exp-top">
              <a href="https://www.linkedin.com/company/quantia-ingenier%C3%ADa-y-consultor%C3%ADa" target="_blank" rel="noopener" aria-label="QUANTIA en LinkedIn">
                <img src="./assets/image-quantia.jpg" alt="Logo de QUANTIA" className="company-logo" loading="lazy" />
              </a>
              <div className="exp-body">
                <div className="exp-head">
                  <h3>Programador Full Stack</h3>
                  <span className="tag live">Actualidad</span>
                  <span className="tag">Jornada completa</span>
                  <span className="tag alt">I+D → Cliente</span>
                </div>
                <p className="exp-meta">
                  <strong>QUANTIA Ingeniería y Consultoría</strong>
                  <span className="sep">·</span> Jun. 2026 — actualidad
                  <span className="sep">·</span> <span id="quantia-duration"></span>
                  <span className="sep">·</span> Granada
                  <span className="sep">·</span> Híbrido
                </p>
                <p>
                  Desarrollo de aplicaciones web a medida de extremo a extremo: interfaces con
                  <strong> React + Vite + TypeScript</strong> y APIs REST con <strong>NestJS</strong>,
                  dentro de los proyectos de ingeniería y consultoría de la empresa.
                  Empecé en el equipo de <strong>desarrollo de producto (I+D)</strong> y actualmente
                  trabajo <strong>asignado a cliente</strong>.
                </p>
                <ul className="learn-list" data-stagger="80">
                  <li className="pop"><i className="fa-solid fa-check"></i>Plataforma que automatiza la gestión de clientes, pólizas y documentos: front con React + Vite + Tailwind y backend de microservicios con NestJS.</li>
                  <li className="pop"><i className="fa-solid fa-check"></i>Desarrollo de producto en I+D: construcción de la plataforma interna desde cero, prototipado y validación de nuevas funcionalidades.</li>
                  <li className="pop"><i className="fa-solid fa-check"></i>Incorporación a proyecto de cliente, adaptándome a su equipo, su código y sus procesos de entrega.</li>
                  <li className="pop"><i className="fa-solid fa-check"></i>Diseño e implementación de APIs REST en NestJS: controladores, servicios, DTOs, validación y autenticación con JWT por roles.</li>
                  <li className="pop"><i className="fa-solid fa-check"></i>Modelado y consulta de datos con ORM sobre base de datos relacional, incluidas migraciones y optimización de consultas.</li>
                  <li className="pop"><i className="fa-solid fa-check"></i>Arquitectura front por componentes reutilizables, enrutado, gestión de estado y consumo de API con manejo de errores y estados de carga.</li>
                  <li className="pop"><i className="fa-solid fa-check"></i>Desarrollo constante de MVPs para clientes de alto nivel, con entregas rápidas e iteración continua sobre feedback real.</li>
                  <li className="pop"><i className="fa-solid fa-check"></i>Trabajo en equipo con Git, revisiones de código, ramas por funcionalidad y metodologías ágiles (Scrum).</li>
                </ul>
                <div className="chips" data-stagger="45">
                  <span className="chip pop">React.js</span><span className="chip pop">Vite</span>
                  <span className="chip pop">TypeScript</span><span className="chip pop">NestJS</span>
                  <span className="chip pop">Node.js</span><span className="chip pop">API REST</span>
                  <span className="chip pop">JWT / Auth</span><span className="chip pop">ORM</span>
                  <span className="chip pop">SQL</span><span className="chip pop">Git</span>
                  <span className="chip pop">Figma</span><span className="chip pop">Scrum</span>
                </div>
              </div>
            </div>
          </article>

          {/* Freelance */}
          <article className="glass exp-card reveal" style={{ ['--d' as string]: '80ms' }}>
            <div className="exp-top">
              <div className="company-logo logo-fallback"><i className="fa-solid fa-shield-halved"></i></div>
              <div className="exp-body">
                <div className="exp-head">
                  <h3>Full Stack Developer</h3>
                  <span className="tag alt">Freelance</span>
                </div>
                <p className="exp-meta">
                  <strong>Proyecto propio · CRM «Segures Task's»</strong>
                  <span className="sep">·</span> 2026 · 3 meses
                  <span className="sep">·</span> Remoto
                </p>
                <p>
                  CRM para corredurías de seguros que automatiza la gestión de clientes, pólizas y
                  documentación. Desarrollo integral y arquitectura de principio a fin.
                </p>
                <ul className="learn-list" data-stagger="80">
                  <li className="pop"><i className="fa-solid fa-check"></i>Aplicación de escritorio con Electron y TypeScript.</li>
                  <li className="pop"><i className="fa-solid fa-check"></i>Backend de microservicios con MongoDB y MinIO para el almacenamiento de imágenes y documentos.</li>
                  <li className="pop"><i className="fa-solid fa-check"></i>Infraestructura desplegada sobre Docker.</li>
                  <li className="pop"><i className="fa-solid fa-check"></i>Arquitectura y desarrollo apoyados en Claude Code.</li>
                </ul>
                <div className="chips" data-stagger="45">
                  <span className="chip pop">Electron</span><span className="chip pop">TypeScript</span>
                  <span className="chip pop">MongoDB</span><span className="chip pop">MinIO</span>
                  <span className="chip pop">Microservicios</span><span className="chip pop">Docker</span>
                  <span className="chip pop">Claude Code</span>
                </div>
              </div>
            </div>
          </article>

          {/* Hiberus full-time */}
          <article className="glass exp-card reveal" style={{ ['--d' as string]: '80ms' }}>
            <div className="exp-top">
              <a href="https://www.linkedin.com/company/hiberus" target="_blank" rel="noopener" aria-label="Hiberus en LinkedIn">
                <img src="./assets/hiberus_logo.jpg" alt="Logo de Hiberus" className="company-logo" loading="lazy" />
              </a>
              <div className="exp-body">
                <div className="exp-head">
                  <h3>Consultor Junior Full Stack</h3>
                  <span className="tag">Jornada completa</span>
                  <span className="tag alt">Banca y seguros</span>
                </div>
                <p className="exp-meta">
                  <strong>Hiberus IT Development</strong>
                  <span className="sep">·</span> 2025 · 7 meses
                  <span className="sep">·</span> Granada
                  <span className="sep">·</span> Híbrido
                </p>
                <p>
                  Participación activa en el desarrollo integral de aplicaciones B2B y B2C para
                  clientes del sector banca y seguros.
                </p>
                <ul className="learn-list" data-stagger="80">
                  <li className="pop"><i className="fa-solid fa-check"></i><span><strong>Mapfre (B2B):</strong> infraestructura frontend con React y SASS, gestión de estados complejos con PHP/AJAX y cumplimiento de accesibilidad WCAG.</span></li>
                  <li className="pop"><i className="fa-solid fa-check"></i><span><strong>Fundación MAPFRE Canarias:</strong> aplicación web con React (Node 18) y bloques Gutenberg, optimización de memoria con Hooks y API en PHP protegida con JWT, en contacto directo con el cliente.</span></li>
                  <li className="pop"><i className="fa-solid fa-check"></i><span><strong>Funcionalidades B2C:</strong> integración de APIs externas y comunicación en tiempo real (chats y notificaciones).</span></li>
                  <li className="pop"><i className="fa-solid fa-check"></i><span><strong>App Angular &amp; i18n:</strong> arquitectura escalable multiidioma con traducción automática a 7 lenguajes.</span></li>
                  <li className="pop"><i className="fa-solid fa-check"></i><span><strong>Caser (Java legacy):</strong> mantenimiento de sistemas críticos, resolución de bugs y estabilidad del código.</span></li>
                  <li className="pop"><i className="fa-solid fa-check"></i><span><strong>DevOps:</strong> flujos CI/CD desde testing hasta despliegue en preproducción.</span></li>
                </ul>
                <div className="chips">
                  <span className="chip">React.js</span><span className="chip">Angular</span>
                  <span className="chip">PHP</span><span className="chip">AJAX</span>
                  <span className="chip">Gutenberg blocks</span><span className="chip">SCSS/SASS</span>
                  <span className="chip">Java</span><span className="chip">JWT</span>
                  <span className="chip">i18n</span><span className="chip">WCAG</span>
                  <span className="chip">CI/CD</span><span className="chip">GitLab</span>
                  <span className="chip">Bitbucket</span>
                </div>
              </div>
            </div>
          </article>

          <div className="grid grid-2">
            {/* Hiberus prácticas */}
            <article className="glass exp-card reveal">
              <div className="exp-head">
                <h3>Consultor</h3>
                <span className="tag alt">Contrato de prácticas</span>
              </div>
              <p className="exp-meta">
                <strong>Hiberus</strong>
                <span className="sep">·</span> Mar. 2025 — Jun. 2025
                <span className="sep">·</span> Granada
                <span className="sep">·</span> Presencial
              </p>
              <p>
                Desarrollo front-end con React y Gutenberg, accesibilidad digital y buenas prácticas
                en proyectos de banca y seguros.
              </p>
              <div className="chips">
                <span className="chip">React.js</span><span className="chip">Vite</span>
                <span className="chip">AngularJS</span><span className="chip">AJAX</span>
                <span className="chip">PHP</span><span className="chip">Accesibilidad</span>
                <span className="chip">Gutenberg Blocks</span>
              </div>
            </article>

            {/* Ruiz Lara */}
            <article className="glass exp-card reveal" style={{ ['--d' as string]: '80ms' }}>
              <div className="exp-head">
                <h3>Desarrollador Front-end</h3>
                <span className="tag alt">Alumno en prácticas</span>
              </div>
              <p className="exp-meta">
                <strong>Ruiz Lara &amp; Asociados</strong>
                <span className="sep">·</span> May. 2024 — Jun. 2024
                <span className="sep">·</span> Granada
                <span className="sep">·</span> Presencial
              </p>
              <div className="chips">
                <span className="chip">React.js</span><span className="chip">Diseño de UI</span>
                <span className="chip">TypeScript</span><span className="chip">Tailwind CSS</span>
                <span className="chip">WordPress</span><span className="chip">GitHub</span>
                <span className="chip">Elementor</span><span className="chip">Supabase</span>
              </div>
            </article>

            {/* Arena Pro Gaming */}
            <article className="glass exp-card reveal">
              <div className="exp-head">
                <h3>Programador Full Stack</h3>
                <span className="tag alt">Alumno en prácticas</span>
              </div>
              <p className="exp-meta">
                <strong>Arena Pro Gaming</strong>
                <span className="sep">·</span> Mar. 2024 — Abr. 2024
                <span className="sep">·</span> Granada
                <span className="sep">·</span> Presencial
              </p>
              <div className="chips">
                <span className="chip">React.js</span><span className="chip">Back-end</span>
                <span className="chip">JavaScript</span><span className="chip">HTML</span>
                <span className="chip">Tailwind CSS</span><span className="chip">GitHub</span>
                <span className="chip">CSS</span><span className="chip">PostgreSQL</span>
              </div>
            </article>

            {/* UGR */}
            <article className="glass exp-card reveal" style={{ ['--d' as string]: '80ms' }}>
              <div className="exp-head">
                <h3>Técnico Informático</h3>
                <span className="tag alt">Alumno en prácticas</span>
              </div>
              <p className="exp-meta">
                <strong>Universidad de Granada — RR. LL. y RR. HH.</strong>
                <span className="sep">·</span> Abr. 2021 — Jun. 2021
                <span className="sep">·</span> Granada
                <span className="sep">·</span> Presencial
              </p>
              <div className="chips">
                <span className="chip">Servicios administrados</span><span className="chip">Ofimática</span>
                <span className="chip">Fotografía</span><span className="chip">Gestión documental</span>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
