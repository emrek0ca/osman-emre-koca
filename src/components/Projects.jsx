const PROJECTS = [
  {
    id: '01',
    name: 'Elyan',
    featured: true,
    desc: 'Personal AI agent that controls your computer and phone through natural language. Local-first and privacy-focused — your files never leave your machine.',
    tags: ['Astro', 'TypeScript', 'Node.js', 'Python', 'Flutter', 'REST API'],
    year: '2024–Now',
    href: 'https://elyan.dev',
    platforms: ['macOS', 'Windows', 'Linux', 'iOS (App Store)', 'npm CLI'],
    links: [
      { label: 'elyan.dev', href: 'https://elyan.dev' },
      { label: 'App Store', href: 'https://apps.apple.com/tr/app/elyan/id6779045459' },
      { label: 'GitHub', href: 'https://github.com/emrek0ca' },
    ],
    npm: 'npm install -g elyan',
  },
  {
    id: '02',
    name: 'IRix',
    featured: false,
    desc: 'Multi-vendor e-commerce management panel with real-time order tracking. Deployed on AWS with secure Stripe payment API integrations.',
    tags: ['Next.js', 'TypeScript', 'Node.js', 'Stripe', 'AWS'],
    year: '2025',
    href: null,
  },
  {
    id: '03',
    name: 'Monex',
    featured: false,
    desc: 'Finance & portfolio dashboard with interactive charts, dynamic dock UI, and real-time state management.',
    tags: ['React', 'TypeScript', 'Vite', 'Zustand', 'PocketBase'],
    year: '2024',
    href: null,
  },
  {
    id: '04',
    name: 'Witly Omega',
    featured: false,
    desc: 'Windows desktop app for system optimization, file cleanup, and RAM management with a user-friendly dashboard.',
    tags: ['Python', 'PySide6'],
    year: '2025',
    href: null,
  },
]

function ArrowIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16" height="16"
      viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round"
      className="proj-arrow"
      aria-hidden="true"
    >
      <path d="M7 7h10v10" /><path d="M7 17 17 7" />
    </svg>
  )
}

export default function Projects() {
  return (
    <section id="work" className="section">
      <div className="section-inner">
        <h2 className="sh">I like building stuff</h2>
        <p className="sh-sub">
          Projects I've shipped — from side experiments to full production apps.
        </p>

        <ol className="proj-list">
          {PROJECTS.map((p) => {
            const Wrapper = p.href ? 'a' : 'div'
            const wrapProps = p.href
              ? { href: p.href, target: '_blank', rel: 'noopener noreferrer' }
              : {}
            return (
              <li key={p.id}>
                <Wrapper
                  {...wrapProps}
                  className={`proj-item${p.featured ? ' proj-item--featured' : ''}`}
                >
                  <span className="proj-num">{p.id}</span>
                  <div className="proj-body">
                    <h3 className="proj-name">
                      {p.name}
                      {p.featured && <span className="proj-live">Live</span>}
                    </h3>
                    <p className="proj-desc">{p.desc}</p>

                    {p.featured && (
                      <div className="elyan-box">
                        <div className="elyan-box__row">
                          <span className="elyan-box__label">Platforms</span>
                          <span style={{ color: '#6b6b6b', fontSize: '0.875rem' }}>
                            {p.platforms.join(' · ')}
                          </span>
                        </div>
                        <div className="elyan-box__row">
                          <span className="elyan-box__label">Install</span>
                          <code className="elyan-box__code">{p.npm}</code>
                        </div>
                        <div className="elyan-box__row">
                          <span className="elyan-box__label">Links</span>
                          <div className="elyan-box__links">
                            {p.links.map((l) => (
                              <a
                                key={l.label}
                                href={l.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="elyan-box__link"
                                onClick={(e) => e.stopPropagation()}
                              >
                                {l.label} ↗
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="proj-meta">
                      {p.tags.map((t) => (
                        <span key={t} className="proj-tag">{t}</span>
                      ))}
                      <span className="proj-year">{p.year}</span>
                    </div>
                  </div>
                  {p.href && <ArrowIcon />}
                </Wrapper>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
