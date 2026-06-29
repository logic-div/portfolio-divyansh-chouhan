import { Reveal } from '@/components/motion-primitives'
import type { TimelineItem } from '@/lib/data'

export function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="relative mx-auto max-w-3xl border-l border-border pl-8">
      {items.map((item, i) => (
        <Reveal as="li" key={`${item.title}-${i}`} delay={i * 0.08} className="relative pb-10 last:pb-0">
          {/* dot */}
          <span className="absolute -left-[2.6rem] top-1 flex size-5 items-center justify-center rounded-full border border-primary/40 bg-background">
            <span className="size-2 rounded-full bg-primary" />
          </span>

          <div className="glass rounded-xl p-5 transition-colors hover:border-primary/40">
            <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
              <h3 className="font-heading text-base font-semibold">{item.title}</h3>
              <span className="font-mono text-xs text-primary">{item.period}</span>
            </div>
            <p className="mt-0.5 text-sm font-medium text-muted-foreground">{item.org}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {item.description}
            </p>
            {item.tags && (
              <div className="mt-3 flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs text-primary"
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
