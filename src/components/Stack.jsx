const SKILLS = [
  'HTML5', 'CSS3', 'TypeScript', 'Node.js',
  'Next.js', 'Astro', 'AWS', 'Stripe',
  'React.js', 'JavaScript', 'Vite', 'Express.js',
  'Python', 'Flutter', 'Dart',
  'Nginx', 'Linux', 'PM2',
  'PocketBase', 'SQLite', 'SQL',
  'Git', 'GitHub', 'npm',
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
