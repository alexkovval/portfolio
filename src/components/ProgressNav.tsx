import { useEffect, useState } from 'react'

const sections = ['hero', 'work', 'stack', 'contact']

/** Fixed 01–04 indicator that highlights the section currently in view. */
export function ProgressNav() {
  const [current, setCurrent] = useState(sections[0])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setCurrent(e.target.id)),
      { rootMargin: '-45% 0px -45% 0px' },
    )
    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <nav className="progress" aria-label="Sections">
      {sections.map((id, i) => (
        <a key={id} href={`#${id}`} className={id === current ? 'is-active' : ''}>
          0{i + 1}
          <span />
        </a>
      ))}
    </nav>
  )
}
