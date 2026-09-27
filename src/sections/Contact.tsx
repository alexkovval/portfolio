import { Reveal } from '../components/Reveal'
import { contacts } from '../data/contacts'

export function Contact() {
  return (
    <section id="contact" className="section">
      <div className="contact">
        <div>
          <Reveal as="p" className="label">04 — Contact</Reveal>
          <Reveal as="h2" delay={0.1}>
            Let's build
            <br />
            <span className="serif">something</span>
          </Reveal>
        </div>
        <div className="contact-list">
          {contacts.map((c, i) => (
            <Reveal key={c.href} delay={0.15 + i * 0.1}>
              <a href={c.href}>
                <i className={`ti ${c.icon}`} />
                {c.label}
                <i className="ti ti-arrow-up-right contact-arrow" />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
