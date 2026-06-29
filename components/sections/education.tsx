import { SectionHeading } from '@/components/section-heading'
import { Timeline } from '@/components/timeline'
import { education } from '@/lib/data'

export function Education() {
  return (
    <section id="education" className="scroll-mt-24 px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Education"
          title="Academic background"
          description="My academic journey building strong foundations in computer science and AI."
        />
        <Timeline items={education} />
      </div>
    </section>
  )
}
