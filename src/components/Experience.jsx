const EXP = [
  {
    role: 'Founder & Full Stack Developer',
    company: 'WitlyDesign & Software',
    period: '2021 — Now',
    points: [
      'Founded and run a software agency end-to-end — from requirements to production',
      'React + TypeScript web apps delivered on time, improving client efficiency by ~30%',
      'Node.js REST APIs handling 1,000+ daily requests with 99.9% uptime',
      'Ubuntu VPS + Nginx + SSL deployments, cutting release time by 50%',
      'CRM and workflow tools actively used by multiple SMB clients',
    ],
  },
  {
    role: 'Backend & Infrastructure Developer',
    company: 'Freelance',
    period: '2021 — Now',
    points: [
      'Node.js services on Linux with PM2 clustering for concurrent traffic',
      'BaaS architectures reducing dev costs by ~40% for early-stage startups',
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
