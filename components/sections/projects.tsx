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
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      className={`glass group flex h-full flex-col overflow-hidden rounded-2xl transition-colors hover:border-primary/40 ${
        project.featured ? 'md:flex-row' : ''
      }`}
    >
      <div
        className={`relative overflow-hidden ${
          project.featured ? 'md:w-1/2' : 'aspect-video'
        }`}
      >
        <Image
          src={project.image}
          alt={`${project.title} preview`}
          width={800}
          height={450}
          loading="lazy"
          className={`size-full object-cover transition-transform duration-500 group-hover:scale-105 ${
            project.featured ? 'aspect-video md:aspect-auto md:h-full' : ''
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
        {project.featured && (
          <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
            <Star className="size-3.5 fill-current" />
            Featured
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-heading text-lg font-semibold transition-colors group-hover:text-primary">
          {project.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-md border border-border bg-card/50 px-2 py-0.5 font-mono text-xs text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-border px-3.5 py-2 text-xs font-medium transition-colors hover:border-primary/50 hover:text-primary"
          >
            <GithubIcon className="size-4" />
            Code
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3.5 py-2 text-xs font-semibold text-primary-foreground transition-transform hover:scale-[1.04]"
          >
            Live Demo
            <ArrowUpRight className="size-4" />
          </a>
        </div>
      </div>
    </motion.article>
  )
}
