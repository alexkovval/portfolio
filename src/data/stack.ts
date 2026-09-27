export interface Tool {
  name: string
  /** Simple Icons slug, optionally with a color: "expo/1A1718" */
  icon: string
}

export interface StackGroup {
  title: string
  tools: Tool[]
}

export const stack: StackGroup[] = [
  {
    title: 'Frontend',
    tools: [
      { name: 'React', icon: 'react' },
      { name: 'Next.js', icon: 'nextdotjs/1A1718' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'React Query', icon: 'reactquery' },
      { name: 'Tailwind CSS', icon: 'tailwindcss' },
      { name: 'Vite', icon: 'vite' },
    ],
  },
  {
    title: 'Mobile',
    tools: [
      { name: 'React Native', icon: 'react' },
      { name: 'Expo', icon: 'expo/1A1718' },
      { name: 'iOS', icon: 'apple/1A1718' },
    ],
  },
  {
    title: 'Backend',
    tools: [
      { name: 'Node.js', icon: 'nodedotjs' },
      { name: 'Express', icon: 'express/1A1718' },
      { name: 'Django REST', icon: 'django' },
      { name: 'Prisma', icon: 'prisma/1A1718' },
      { name: 'JWT', icon: 'jsonwebtokens/1A1718' },
    ],
  },
  {
    title: 'Data & DevOps',
    tools: [
      { name: 'PostgreSQL', icon: 'postgresql' },
      { name: 'MongoDB', icon: 'mongodb' },
      { name: 'Docker', icon: 'docker' },
      { name: 'Vercel', icon: 'vercel/1A1718' },
      { name: 'Render', icon: 'render/1A1718' },
    ],
  },
]
