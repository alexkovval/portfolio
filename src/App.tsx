import { MotionConfig } from 'motion/react'
import { ProgressNav } from './components/ProgressNav'
import { Contact } from './sections/Contact'
import { Hero } from './sections/Hero'
import { Projects } from './sections/Projects'
import { Stack } from './sections/Stack'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <ProgressNav />
      <main>
        <Hero />
        <Projects />
        <Stack />
        <Contact />
      </main>
      <footer className="footer">© {new Date().getFullYear()} Alexandra Andrusyshyn</footer>
    </MotionConfig>
  )
}
