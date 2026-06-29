'use client'

import { motion } from 'framer-motion'
import {
  Boxes,
  BrainCircuit,
  Cloud,
  Code2,
  Database,
  GitBranch,
  LayoutTemplate,
  LineChart,
  Wrench,
} from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Stagger, StaggerItem } from '@/components/motion-primitives'
import { skillGroups } from '@/lib/data'

const icons: Record<string, typeof Code2> = {
  'Programming Languages': Code2,
  'Machine Learning': BrainCircuit,
  'Deep Learning': Boxes,
  'Data Science': LineChart,
  'Web Development': LayoutTemplate,
  Databases: Database,
  Tools: Wrench,
  Cloud: Cloud,
  'Version Control': GitBranch,
}

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Skills"
          title="Technologies I work with"
          description="A toolkit spanning the full machine learning and software engineering lifecycle."
        />

        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => {
            const Icon = icons[group.category] ?? Code2
            return (
              <StaggerItem key={group.category}>
                <div className="group h-full rounded-xl border border-border/40 bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-foreground/30">
                  <div className="mb-5 flex items-center gap-3">
                    <span className="flex size-10 items-center justify-center rounded-lg bg-secondary text-foreground transition-colors group-hover:bg-foreground group-hover:text-background">
                      <Icon className="size-5" />
                    </span>
                    <h3 className="font-heading text-sm font-bold uppercase tracking-tight text-foreground">
                      {group.category}
                    </h3>
                  </div>

                  <div className="space-y-3.5">
                    {group.skills.map((skill) => (
                      <div key={skill.name}>
                        <div className="mb-1 flex items-center justify-between text-xs">
                          <span className="text-muted-foreground">{skill.name}</span>
                          <span className="font-mono text-[10px] font-bold text-muted-foreground">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                            className="h-full rounded-full bg-primary"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            )
          })}
        </Stagger>
      </div>
    </section>
  )
}
