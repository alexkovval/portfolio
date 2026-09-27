import { motion } from 'motion/react'
import type { ReactNode } from 'react'

type Tag = 'div' | 'p' | 'h1' | 'h2' | 'h3' | 'ul' | 'a'

interface RevealProps {
  children: ReactNode
  delay?: number
  x?: number
  y?: number
  as?: Tag
  className?: string
}

/** Fades and slides its children in the first time they scroll into view. */
export function Reveal({ children, delay = 0, x = 0, y = 28, as = 'div', className }: RevealProps) {
  const Component = motion[as]
  return (
    <Component
      className={className}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, delay, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {children}
    </Component>
  )
}
