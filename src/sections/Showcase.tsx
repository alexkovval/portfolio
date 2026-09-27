import { motion } from 'motion/react'
import { Reveal } from '../components/Reveal'

const skills = [
  { icon: 'ti-device-desktop', label: 'Web apps' },
  { icon: 'ti-device-mobile', label: 'Mobile apps' },
  { icon: 'ti-server-2', label: 'APIs and databases' },
]

/** Monitor + iPhone mockup with the end-to-end pitch next to it. */
export function Showcase() {
  return (
    <div className="showcase">
      <div className="devices">
        <Reveal className="monitor">
          <div className="monitor-screen">
            <img src="/screens/web/desktop-home.webp" alt="Bloom Beauty web store on desktop" />
          </div>
          <div className="monitor-neck" />
          <div className="monitor-base" />
        </Reveal>
        <motion.div
          className="iphone"
          initial={{ opacity: 0, x: 40, y: 20 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <img src="/screens/app/home.webp" alt="Bloom Beauty iOS app" />
        </motion.div>
      </div>
      <div className="showcase-text">
        <Reveal as="p" delay={0.1} className="label">End to end</Reveal>
        <Reveal as="h2" delay={0.2}>
          From database
          <br />
          to <span className="serif">your pocket</span>
        </Reveal>
        <Reveal as="p" delay={0.3}>
          I build products end to end — responsive web apps, mobile apps and admin panels, together
          with the APIs and databases behind them.
        </Reveal>
        <Reveal as="ul" delay={0.4}>
          {skills.map((s) => (
            <li key={s.label}>
              <i className={`ti ${s.icon}`} />
              {s.label}
            </li>
          ))}
        </Reveal>
      </div>
    </div>
  )
}
