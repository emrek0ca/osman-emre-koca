const LINKS = [
  {
    label: 'Email',
    value: 'osmanemrekoca@gmail.com',
    href: 'mailto:osmanemrekoca@gmail.com',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/osmanemrekoca',
    href: 'https://linkedin.com/in/osmanemrekoca',
  },
  {
    label: 'GitHub',
    value: 'github.com/emrek0ca',
    href: 'https://github.com/emrek0ca',
  },
  {
    label: 'Wiqo',
    value: 'wiqoai.com',
    href: 'https://wiqoai.com',
  },
  {
    label: 'Phone',
    value: '+90 544 907 6540',
    href: 'tel:+905449076540',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="section-inner">
        <h2 className="sh">Get in Touch</h2>
        <p className="sh-sub">
          Open to remote backend, AI and full-stack roles, full-time or contract.
          Available immediately. Based in Ankara, Turkey — working remotely worldwide.
        </p>

        <nav className="contact-links" aria-label="Contact">
          {LINKS.map(({ label, value, href }) => (
            <a
              key={label}
              href={href}
              className="contact-link"
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              <div className="contact-link__info">
                <div className="contact-link__label">{label}</div>
                <div className="contact-link__value">{value}</div>
              </div>
              <span className="contact-link__arrow">↗</span>
            </a>
          ))}
        </nav>
      </div>
    </section>
  )
}
