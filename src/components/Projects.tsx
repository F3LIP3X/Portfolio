export default function Projects() {
  return (
    <section id="projects">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow reveal">05 — Trabajo</span>
          <h2 className="section-title reveal" style={{ ['--d' as string]: '60ms' }}>Proyectos destacados</h2>
        </div>

        <div className="grid grid-3">
          <article className="glass project reveal">
            <div className="project-media media-gradient">
              <div className="mockui">
                <div className="mockui-bar">
                  <span className="dot"></span><span className="dot"></span><span className="dot"></span>
                  <i className="fa-solid fa-people-arrows mockui-icon" aria-hidden="true"></i>
                </div>
                <div className="mockui-body mockui-match">
                  <div className="mockui-avatar">FT</div>
                  <div className="mockui-match-line"></div>
                  <div className="mockui-pill">92% match</div>
                  <div className="mockui-avatar alt">Co</div>
                </div>
              </div>
              <div className="stack">
                <i className="fab fa-react" title="React"></i>
                <i className="fab fa-laravel" title="Laravel"></i>
              </div>
            </div>
            <div className="project-body">
              <h3>SWORK — Matching laboral inteligente</h3>
              <p>TFG en STEM Granada. Arquitectura REST con React + Vite y Laravel, autenticación JWT,
                UI reutilizable con SCSS y lógica de recomendaciones sobre el modelo de datos.</p>
              <span className="tag alt" style={{ alignSelf: 'flex-start', marginTop: 'auto' }}>Proyecto de Fin de Grado</span>
            </div>
          </article>

          <article className="glass project reveal">
            <div className="project-media media-gradient alt">
              <div className="mockui">
                <div className="mockui-bar">
                  <span className="dot"></span><span className="dot"></span><span className="dot"></span>
                  <i className="fa-solid fa-shield-halved mockui-icon" aria-hidden="true"></i>
                </div>
                <div className="mockui-body mockui-list">
                  <div className="mockui-row"><span>Póliza #10452</span><em className="mockui-tag ok">Activa</em></div>
                  <div className="mockui-row"><span>Póliza #10453</span><em className="mockui-tag">Pend.</em></div>
                </div>
              </div>
              <div className="stack">
                <i className="fa-solid fa-desktop" title="Electron"></i>
                <i className="fas fa-database" title="MongoDB"></i>
              </div>
            </div>
            <div className="project-body">
              <h3>Segures Task's — CRM de seguros</h3>
              <p>CRM freelance para corredurías: gestión de clientes, pólizas y documentos. Electron +
                TypeScript, microservicios con MongoDB y MinIO, desplegado en Docker.</p>
              <span className="tag alt" style={{ alignSelf: 'flex-start', marginTop: 'auto' }}>Freelance</span>
            </div>
          </article>

          <article className="glass project reveal">
            <div className="project-media media-gradient g3">
              <div className="mockui">
                <div className="mockui-bar">
                  <span className="dot"></span><span className="dot"></span><span className="dot"></span>
                  <i className="fa-solid fa-diagram-project mockui-icon" aria-hidden="true"></i>
                </div>
                <div className="mockui-body mockui-kanban">
                  <div className="mockui-col"><span>To do</span><div className="mockui-card"></div><div className="mockui-card"></div></div>
                  <div className="mockui-col"><span>Doing</span><div className="mockui-card alt"></div></div>
                  <div className="mockui-col"><span>Done</span><div className="mockui-card"></div><div className="mockui-card alt"></div></div>
                </div>
              </div>
              <div className="stack"><i className="fab fa-laravel" title="Laravel"></i><i className="fab fa-php" title="PHP"></i></div>
            </div>
            <div className="project-body">
              <h3>STEMFounding</h3>
              <p>Project manager hecho con Laravel durante el segundo trimestre del DAM en STEM Granada.</p>
              <a href="https://github.com/F3LIP3X/STEMFounding" className="btn btn-sm btn-primary" target="_blank" rel="noopener">Ver proyecto <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
            </div>
          </article>

          <article className="glass project reveal">
            <div className="project-media media-gradient g4">
              <div className="mockui">
                <div className="mockui-bar">
                  <span className="dot"></span><span className="dot"></span><span className="dot"></span>
                  <i className="fa-solid fa-circle-dot mockui-icon" aria-hidden="true"></i>
                </div>
                <div className="mockui-body mockui-game">
                  <div className="mockui-score">8</div>
                  <div className="mockui-bird"></div>
                </div>
              </div>
              <div className="stack"><i className="fas fa-cube" title="Three.js"></i><i className="fab fa-js" title="TypeScript"></i><i className="fas fa-fire" title="Firebase"></i></div>
            </div>
            <div className="project-body">
              <h3>Billar 3D</h3>
              <p>Billar americano en 3D para el navegador, con física propia, reglas oficiales y multijugador online por sala. Three.js, TypeScript y Firebase.</p>
              <a href="https://billar3d.web.app" className="btn btn-sm btn-primary" target="_blank" rel="noopener">Jugar <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
            </div>
          </article>

          <article className="glass project reveal" style={{ ['--d' as string]: '80ms' }}>
            <div className="project-media media-gradient g4">
              <div className="mockui">
                <div className="mockui-bar">
                  <span className="dot"></span><span className="dot"></span><span className="dot"></span>
                  <i className="fa-solid fa-caravan mockui-icon" aria-hidden="true"></i>
                </div>
                <div className="mockui-body mockui-cal">
                  <div className="mockui-cal-grid">
                    <span></span><span></span><span className="on"></span><span className="on"></span><span></span><span></span><span></span>
                  </div>
                  <div className="mockui-pill">3 noches</div>
                </div>
              </div>
              <div className="stack"><i className="fab fa-react" title="React"></i><i className="fab fa-js" title="JavaScript"></i></div>
            </div>
            <div className="project-body">
              <h3>ArenaCamping-web</h3>
              <p>Aplicación web para gestionar reservas en campings.</p>
              <a href="https://github.com/F3LIP3X/ArenaCamping-web" className="btn btn-sm btn-primary" target="_blank" rel="noopener">Ver proyecto <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
            </div>
          </article>

          <article className="glass project reveal" style={{ ['--d' as string]: '160ms' }}>
            <div className="project-media media-gradient">
              <div className="mockui">
                <div className="mockui-bar">
                  <span className="dot"></span><span className="dot"></span><span className="dot"></span>
                  <i className="fa-solid fa-leaf mockui-icon" aria-hidden="true"></i>
                </div>
                <div className="mockui-body mockui-table">
                  <div className="mockui-trow head"><span>id</span><span>nombre</span></div>
                  <div className="mockui-trow"><span>01</span><span className="bar"></span></div>
                  <div className="mockui-trow"><span>02</span><span className="bar"></span></div>
                </div>
              </div>
              <div className="stack"><i className="fab fa-java" title="Java"></i><i className="fas fa-database" title="MongoDB"></i></div>
            </div>
            <div className="project-body">
              <h3>MongoDB-Spring-Maven</h3>
              <p>Proyecto MVC con Spring Boot y MongoDB.</p>
              <a href="https://github.com/F3LIP3X/MongoDB-Spring-Maven" className="btn btn-sm btn-primary" target="_blank" rel="noopener">Ver proyecto <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
            </div>
          </article>

          <article className="glass project reveal">
            <div className="project-media media-gradient alt">
              <div className="mockui">
                <div className="mockui-bar">
                  <span className="dot"></span><span className="dot"></span><span className="dot"></span>
                  <i className="fa-solid fa-gamepad mockui-icon" aria-hidden="true"></i>
                </div>
                <div className="mockui-body mockui-game">
                  <div className="mockui-score">042</div>
                  <div className="mockui-pipe top"></div>
                  <div className="mockui-pipe bottom"></div>
                  <div className="mockui-bird"></div>
                </div>
              </div>
              <div className="stack"><i className="fab fa-java" title="Java"></i><i className="fab fa-android" title="Android"></i></div>
            </div>
            <div className="project-body">
              <h3>FlappyGame</h3>
              <p>Juego tipo Flappy Bird desarrollado en Android Studio.</p>
              <a href="https://github.com/F3LIP3X/FlappyGame" className="btn btn-sm btn-primary" target="_blank" rel="noopener">Ver proyecto <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
            </div>
          </article>

          <article className="glass project reveal" style={{ ['--d' as string]: '80ms' }}>
            <div className="project-media media-gradient g3">
              <div className="mockui">
                <div className="mockui-bar">
                  <span className="dot"></span><span className="dot"></span><span className="dot"></span>
                  <i className="fa-solid fa-film mockui-icon" aria-hidden="true"></i>
                </div>
                <div className="mockui-body mockui-posters">
                  <span className="poster p1"></span><span className="poster p2"></span><span className="poster p3"></span>
                </div>
              </div>
              <div className="stack"><i className="fab fa-java" title="Java"></i><i className="fas fa-database" title="MongoDB"></i></div>
            </div>
            <div className="project-body">
              <h3>Film MVC · Spring · MongoDB</h3>
              <p>Proyecto Java con Spring Boot y MongoDB, con endpoints probados mediante Postman.</p>
              <a href="https://github.com/F3LIP3X/Film-MVC-Spring-Postman-MongoDB" className="btn btn-sm btn-primary" target="_blank" rel="noopener">Ver proyecto <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
            </div>
          </article>

          <article className="glass project reveal" style={{ ['--d' as string]: '160ms' }}>
            <div className="project-media media-gradient g4">
              <div className="mockui">
                <div className="mockui-bar">
                  <span className="dot"></span><span className="dot"></span><span className="dot"></span>
                  <i className="fa-solid fa-flask mockui-icon" aria-hidden="true"></i>
                </div>
                <div className="mockui-body mockui-chargrid">
                  <span className="mockui-avatar sm"></span>
                  <span className="mockui-avatar alt sm"></span>
                  <span className="mockui-avatar sm"></span>
                  <em className="mockui-tag">Rick</em>
                </div>
              </div>
              <div className="stack"><i className="fab fa-vuejs" title="Vue"></i><i className="fas fa-layer-group" title="Nuxt.js"></i></div>
            </div>
            <div className="project-body">
              <h3>Prueba Técnica Óptima Cultura</h3>
              <p>Prueba técnica desarrollada con Vue sobre la temática de Rick y Morty.</p>
              <a href="https://github.com/F3LIP3X/Prueba-Tecnica-Optima-Cultura-Rick-Morty-Felipe-Jose" className="btn btn-sm btn-primary" target="_blank" rel="noopener">Ver proyecto <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
