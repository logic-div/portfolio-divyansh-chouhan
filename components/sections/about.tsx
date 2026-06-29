import { BrainCircuit, Code2, Database, LineChart } from 'lucide-react'
import { Reveal } from '@/components/motion-primitives'
import { SectionHeading } from '@/components/section-heading'
import { about } from '@/lib/data'

const interestIcons = [BrainCircuit, LineChart, Database, Code2]

export function About() {
  return (
    <section id="about" className="scroll-mt-24 px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About Me"
          title="Turning data into intelligent experiences"
        />

        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
          <Reveal className="space-y-5">
            {about.bio.map((p, i) => (
              <p key={i} className="text-pretty leading-relaxed text-muted-foreground">
                {p}
              </p>
            ))}
            <div className="rounded-xl border border-border/40 bg-card p-5">
              <p className="font-heading text-xs font-bold uppercase tracking-wider text-foreground">Career Goal</p>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {about.goals}
              </p>
            </div>
          </Reveal>
 
          <Reveal delay={0.1}>
            <p className="mb-4 font-heading text-xs font-bold uppercase tracking-widest text-muted-foreground">
              What I focus on
            </p>
            <div className="grid grid-cols-2 gap-3">
              {about.interests.map((interest, i) => {
                const Icon = interestIcons[i % interestIcons.length]
                return (
                  <div
                    key={interest}
                    className="group flex flex-col gap-3 rounded-xl border border-border/40 bg-card p-4 transition-all hover:-translate-y-0.5 hover:border-foreground/30"
                  >
                    <span className="flex size-10 items-center justify-center rounded-lg bg-secondary text-foreground transition-colors group-hover:bg-foreground group-hover:text-background">
                      <Icon className="size-5" />
                    </span>
                    <span className="text-sm font-semibold">{interest}</span>
                  </div>
                )
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
