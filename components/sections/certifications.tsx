import { Award, ExternalLink } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Stagger, StaggerItem } from '@/components/motion-primitives'
import { certifications } from '@/lib/data'

export function Certifications() {
  return (
    <section className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Certifications"
          title="Credentials & courses"
          description="Continuous learning across AI, machine learning, data science and cloud."
        />

        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert) => (
            <StaggerItem key={cert.title}>
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full items-start gap-4 rounded-xl border border-border/40 bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-foreground/30"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-foreground transition-colors group-hover:bg-foreground group-hover:text-background">
                  <Award className="size-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-heading text-sm font-semibold leading-snug">
                      {cert.title}
                    </h3>
                    <ExternalLink className="size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground" />
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{cert.issuer}</p>
                  <p className="mt-1.5 font-mono text-[10px] font-bold text-muted-foreground uppercase">{cert.date}</p>
                </div>
              </a>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
