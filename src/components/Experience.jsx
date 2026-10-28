const EXP = [
  {
    role: 'Founder & Software Engineer',
    company: 'Witly Design & Software',
    period: '2021 — Now',
    points: [
      'Built and delivered custom web, backend, e-commerce, CRM and business automation systems for 20+ clients',
      'Own projects end-to-end: requirements, architecture, Node.js/TypeScript APIs, database design, integrations, deployment and production support',
      'Deploy and operate services on Linux VPS with Nginx, PM2 and SSL, and troubleshoot production issues directly',
      'Integrate payment providers and third-party APIs, including marketplace payment and order-management workflows',
    ],
  },
  {
    role: 'Backend & Infrastructure Developer',
    company: 'Freelance',
    period: '2021 — Now',
    points: [
      'Develop and maintain backend services, REST APIs and data flows for production applications',
      'Work across JavaScript/TypeScript, Python, SQL and Linux with a focus on reliability and practical delivery',
    ],
  },
]

export default function Experience() {
  return (
    <section className="section">
      <div className="section-inner">
        <h2 className="sh">Experience</h2>

        <ol className="exp-list">
          {EXP.map((e, i) => (
            <li key={i} className="exp-item">
              <div className="exp-header">
                <div>
                  <div className="exp-role">{e.role}</div>
                  <div className="exp-company">{e.company}</div>
                </div>
                <span className="exp-period">{e.period}</span>
              </div>
              <ul className="exp-points">
                {e.points.map((pt, j) => (
                  <li key={j} className="exp-point">
                    <span className="exp-dot">—</span>
                    {pt}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>

        {/* Education */}
        <div className="exp-item" style={{ borderTop: '1px solid var(--border)', marginTop: 0 }}>
          <div className="exp-header">
            <div>
              <div className="exp-role">B.Sc. Mathematics <span style={{ fontWeight: 400, color: 'var(--muted)' }}>(In Progress)</span></div>
              <div className="exp-company">Çankırı Karatekin University</div>
            </div>
            <span className="exp-period">2021 — Now</span>
          </div>
        </div>
      </div>
    </section>
  )
}
