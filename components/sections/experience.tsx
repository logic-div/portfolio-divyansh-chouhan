import { SectionHeading } from '@/components/section-heading'
import { Timeline } from '@/components/timeline'
import { experience } from '@/lib/data'

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've made an impact"
          description="Internships, research, hackathons and leadership roles along the way."
        />
        <Timeline items={experience} />
      </div>
    </section>
  )
}
