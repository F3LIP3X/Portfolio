import { useState } from 'react'

const SKILLS: { cat: string; icon: string; label: string }[] = [
  { cat: 'front', icon: 'fab fa-react', label: 'React' },
  { cat: 'front', icon: 'fab fa-angular', label: 'Angular' },
  { cat: 'front', icon: 'fab fa-vuejs', label: 'Vue' },
  { cat: 'front', icon: 'fas fa-layer-group', label: 'Nuxt.js' },
  { cat: 'front', icon: 'fab fa-js', label: 'TypeScript' },
  { cat: 'front', icon: 'fab fa-sass', label: 'SCSS/Sass' },
  { cat: 'front', icon: 'fab fa-css3', label: 'Tailwind/Bootstrap' },
  { cat: 'front', icon: 'fas fa-code', label: 'AJAX' },
  { cat: 'front', icon: 'fas fa-bolt', label: 'Vite' },
  { cat: 'front', icon: 'fab fa-figma', label: 'Figma' },
  { cat: 'back', icon: 'fab fa-node', label: 'Node.js' },
  { cat: 'back', icon: 'fab fa-php', label: 'PHP/Laravel' },
  { cat: 'back', icon: 'fab fa-java', label: 'Java' },
  { cat: 'back', icon: 'fab fa-python', label: 'Python' },
  { cat: 'back', icon: 'fab fa-wordpress', label: 'WordPress' },
  { cat: 'back', icon: 'fas fa-cubes', label: 'Gutenberg' },
  { cat: 'back', icon: 'fas fa-server', label: 'Liferay' },
  { cat: 'data', icon: 'fas fa-database', label: 'MySQL/MongoDB' },
  { cat: 'data', icon: 'fas fa-database', label: 'PostgreSQL' },
  { cat: 'data', icon: 'fas fa-database', label: 'Oracle' },
  { cat: 'data', icon: 'fas fa-database', label: 'SQL' },
  { cat: 'tools', icon: 'fab fa-github', label: 'GitHub' },
  { cat: 'tools', icon: 'fab fa-gitlab', label: 'GitLab' },
  { cat: 'tools', icon: 'fab fa-bitbucket', label: 'Bitbucket' },
  { cat: 'tools', icon: 'fab fa-microsoft', label: 'Azure DevOps' },
  { cat: 'tools', icon: 'fab fa-docker', label: 'Docker' },
  { cat: 'tools', icon: 'fas fa-tools', label: 'Jenkins' },
  { cat: 'tools', icon: 'fab fa-atlassian', label: 'JIRA' },
  { cat: 'tools', icon: 'fas fa-users', label: 'Scrum' },
  { cat: 'tools', icon: 'fas fa-brain', label: 'Claude IA' },
]

const FILTERS = [
  { key: 'all', label: 'Todas' },
  { key: 'front', label: 'Front-end' },
  { key: 'back', label: 'Back-end' },
  { key: 'data', label: 'Datos' },
  { key: 'tools', label: 'Herramientas' },
]

export default function Skills() {
  const [filter, setFilter] = useState('all')

  return (
    <section id="skills">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow reveal">04 — Stack</span>
          <h2 className="section-title reveal" style={{ ['--d' as string]: '60ms' }}>Habilidades</h2>
          <p className="section-sub reveal" style={{ ['--d' as string]: '120ms' }}>Filtra por categoría para ver las tecnologías con las que trabajo.</p>
        </div>

        <div className="skill-filters reveal" role="tablist" aria-label="Filtros de habilidades">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              className={`filter-btn${filter === f.key ? ' active' : ''}`}
              type="button"
              onClick={() => setFilter(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="skills-grid">
          {SKILLS.map((s) => (
            <div
              key={s.label}
              className={`glass skill reveal${filter !== 'all' && s.cat !== filter ? ' hide' : ''}`}
              data-cat={s.cat}
            >
              <i className={s.icon}></i><span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
