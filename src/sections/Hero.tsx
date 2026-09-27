import { Reveal } from '../components/Reveal'

export function Hero() {
  return (
    <section id="hero" className="section">
      <div className="hero">
        <div>
          <Reveal as="p" className="label">01 — Hi, I'm</Reveal>
          <Reveal as="h1" delay={0.1}>
            Alexandra<span className="serif">Andrusyshyn</span>
          </Reveal>
          <Reveal as="p" delay={0.2} className="role">
            Fullstack developer <span>/</span> Frontend developer
          </Reveal>
          <Reveal as="p" delay={0.25} className="hero-sub">
            Building web apps, mobile apps and admin tools — from first idea to production deploy.
          </Reveal>
          <Reveal delay={0.35} className="hero-actions">
            <a className="btn btn-fill" href="#work">
              View my work <i className="ti ti-arrow-down" />
            </a>
            <a className="btn" href="#contact">Get in touch</a>
          </Reveal>
        </div>
        <Reveal delay={0.2}>
          <div className="arch">
            <img src="/photo.jpg" alt="Alexandra Andrusyshyn" />
          </div>
        </Reveal>
      </div>
      <Reveal as="p" delay={0.5} className="scroll-hint">
        <i className="ti ti-arrow-down" /> Scroll
      </Reveal>
    </section>
  )
}
