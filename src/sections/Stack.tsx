import { Reveal } from '../components/Reveal'
import { stack } from '../data/stack'

export function Stack() {
  return (
    <section id="stack" className="section">
      <Reveal as="p" className="label">03 — Stack</Reveal>
      <Reveal as="h2" delay={0.1} className="section-title">
        Tools I <span className="serif">work with</span>
      </Reveal>
      <div className="stack">
        {stack.map((group, i) => (
          <Reveal key={group.title} delay={0.1 + i * 0.1} className="stack-col">
            <h4>{group.title}</h4>
            {group.tools.map((tool) => (
              <div key={tool.name} className="tool">
                <img src={`https://cdn.simpleicons.org/${tool.icon}`} alt="" loading="lazy" />
                {tool.name}
              </div>
            ))}
          </Reveal>
        ))}
      </div>
    </section>
  )
}
