import { Reveal } from '@/components/motion-primitives'
import type { TimelineItem } from '@/lib/data'

export function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="relative mx-auto max-w-3xl border-l border-border pl-8">
      {items.map((item, i) => (
        <Reveal as="li" key={`${item.title}-${i}`} delay={i * 0.08} className="relative pb-10 last:pb-0">
          {/* dot */}
          <span className="absolute -left-[2.625rem] top-1 flex size-5 items-center justify-center rounded-full border border-border bg-background">
            <span className="size-1.5 rounded-full bg-foreground" />
          </span>

          <div className="rounded-xl border border-border/40 bg-card p-5 transition-colors hover:border-foreground/20">
            <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
              <h3 className="font-heading text-base font-bold uppercase tracking-tight">{item.title}</h3>
              <span className="font-mono text-[9px] font-bold text-muted-foreground uppercase bg-secondary px-2 py-0.5 rounded">{item.period}</span>
            </div>
            <p className="mt-1 text-xs font-bold uppercase tracking-wider text-muted-foreground">{item.org}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {item.description}
            </p>
            {item.tags && (
              <div className="mt-3 flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded bg-secondary px-2 py-0.5 text-[9px] font-semibold text-muted-foreground uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </Reveal>
      ))}
    </ol>
  )
}
