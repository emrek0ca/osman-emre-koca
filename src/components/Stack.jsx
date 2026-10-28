const SKILLS = [
  'TypeScript', 'Node.js', 'Express.js', 'JavaScript',
  'REST APIs', 'PostgreSQL', 'SQLite', 'SQL',
  'LLM API Integrations', 'Agent Orchestration', 'Payment Integrations',
  'Linux', 'Nginx', 'PM2', 'Git', 'GitHub',
  'React', 'React Native', 'Next.js', 'Vite', 'TailwindCSS',
  'Python', 'Flutter', 'Dart', 'AWS', 'Stripe', 'Astro', 'PocketBase', 'npm',
]

export default function Stack() {
  return (
    <section id="stack" className="section">
      <div className="section-inner">
        <h2 className="sh">Skills</h2>
        <div className="skills-wrap">
          {SKILLS.map((s) => (
            <span key={s} className="skill-pill">{s}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
