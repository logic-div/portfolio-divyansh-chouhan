import { Download, FileText } from 'lucide-react'
import { Reveal } from '@/components/motion-primitives'
import { profile } from '@/lib/data'

export function Resume() {
  return (
    <section className="px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="glass relative overflow-hidden rounded-3xl p-8 text-center sm:p-12 border border-border/40 shadow-sm">
            <span className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <FileText className="size-7" />
            </span>
            <h2 className="mt-5 text-balance font-heading text-2xl font-bold sm:text-3xl">
              Want the full story?
            </h2>
            <p className="mx-auto mt-2 max-w-md text-pretty leading-relaxed text-muted-foreground">
              Download my resume for a detailed overview of my experience, projects and
              technical skills.
            </p>
            <a
              href={profile.resumeUrl}
              download
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03] active:scale-95"
            >
              <Download className="size-4" />
              Download Resume
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
