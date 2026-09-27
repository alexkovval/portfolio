import { useState } from 'react'
import { motion } from 'motion/react'
import type { Gallery as GalleryData } from '../data/projects'
import { Carousel } from './Carousel'

interface GalleryProps {
  galleries: GalleryData[]
  projectId: string
}

/** One carousel, or a set of tabbed carousels when a project has several galleries. */
export function Gallery({ galleries, projectId }: GalleryProps) {
  const [activeId, setActiveId] = useState(galleries[0].id)
  const active = galleries.find((g) => g.id === activeId) ?? galleries[0]

  if (galleries.length === 1) {
    return <Carousel slides={active.slides} kind={active.kind} />
  }

  return (
    <>
      <div className="tabs" role="tablist">
        {galleries.map((g) => (
          <button
            key={g.id}
            role="tab"
            aria-selected={g.id === activeId}
            className={g.id === activeId ? 'is-active' : ''}
            onClick={() => setActiveId(g.id)}
          >
            {g.id === activeId && (
              <motion.span
                layoutId={`tab-indicator-${projectId}`}
                className="tab-indicator"
                transition={{ type: 'spring', stiffness: 380, damping: 32 }}
              />
            )}
            <i className={`ti ${g.icon}`} />
            <span>{g.label}</span>
          </button>
        ))}
      </div>
      {/* keyed remount: the new carousel slides in without the old one collapsing the height first */}
      <motion.div
        key={active.id}
        role="tabpanel"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
      >
        <Carousel slides={active.slides} kind={active.kind} />
      </motion.div>
    </>
  )
}
