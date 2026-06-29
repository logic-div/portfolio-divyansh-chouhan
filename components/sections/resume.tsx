import { Download, FileText } from 'lucide-react'
import { Reveal } from '@/components/motion-primitives'
import { profile } from '@/lib/data'

export function Resume() {
  return (
    <section className="px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl p-8 text-center sm:p-12 border border-border/40 bg-card shadow-sm">
            <span className="mx-auto flex size-12 items-center justify-center rounded-xl bg-secondary text-foreground">
              <FileText className="size-6" />
            </span>
            <h2 className="mt-5 text-balance font-heading text-2xl font-black uppercase tracking-tight text-foreground sm:text-3xl">
              Want the full story?
            </h2>
            <p className="mx-auto mt-2 max-w-md text-pretty text-xs leading-relaxed text-muted-foreground">
              Download my resume for a detailed overview of my experience, projects and
              technical skills.
            </p>
            <a
              href={profile.resumeUrl}
              download
              className="mt-6 inline-flex items-center gap-2 bg-foreground text-background font-bold text-xs uppercase tracking-wider px-6 py-3.5 hover:opacity-90 transition-opacity"
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
