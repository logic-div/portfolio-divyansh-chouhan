import { Reveal } from '@/components/motion-primitives'

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description?: string
}) {
  return (
    <div className="mb-16 border-b border-border/20 pb-6">
      <Reveal>
        <span className="font-heading text-xs font-bold uppercase tracking-widest text-muted-foreground">
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mt-2 font-heading text-3xl font-black uppercase tracking-[-0.04em] text-foreground sm:text-4xl md:text-5xl">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.1}>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  )
}
