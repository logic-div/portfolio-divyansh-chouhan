'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, Star } from 'lucide-react'
import Image from 'next/image'
import { GithubIcon } from '@/components/brand-icons'
import { SectionHeading } from '@/components/section-heading'
import { Stagger, StaggerItem } from '@/components/motion-primitives'
import { projects, type Project } from '@/lib/data'

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          description="A collection of AI, ML and full-stack projects I've designed and built."
        />

        <Stagger className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <StaggerItem
              key={project.title}
              className={project.featured ? 'md:col-span-2' : ''}
            >
              <ProjectCard project={project} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="group flex flex-col overflow-hidden"
    >
      <div className="relative aspect-[16/7] w-full overflow-hidden rounded-xl border border-border/40 bg-muted shadow-sm">
        <Image
          src={project.image}
          alt={`${project.title} preview`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          loading="lazy"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        />
        {project.featured && (
          <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-foreground px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-background">
            Featured
          </span>
        )}
      </div>

      <div className="flex flex-col pt-4">
        <h3 className="font-heading text-base font-bold uppercase tracking-tight text-foreground transition-colors group-hover:text-muted-foreground">
          {project.title}
        </h3>
        
        <p className="mt-2 text-xs leading-relaxed text-muted-foreground line-clamp-3">
          {project.description}
        </p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded bg-secondary px-1.5 py-0.5 font-mono text-[9px] font-semibold text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-4 flex items-center gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
          >
            <GithubIcon className="size-3.5" />
            Code
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
          >
            Live Demo &rarr;
          </a>
        </div>
      </div>
    </motion.article>
  )
}
