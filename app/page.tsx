import { Background } from '@/components/background'
import { BackToTop } from '@/components/back-to-top'
import { Loader } from '@/components/loader'
import { Navbar } from '@/components/navbar'
import { ScrollProgress } from '@/components/scroll-progress'
import { About } from '@/components/sections/about'
import { Achievements } from '@/components/sections/achievements'
import { Certifications } from '@/components/sections/certifications'
import { Contact } from '@/components/sections/contact'
import { Education } from '@/components/sections/education'
import { Experience } from '@/components/sections/experience'
import { Footer } from '@/components/sections/footer'
import { Hero } from '@/components/sections/hero'
import { Projects } from '@/components/sections/projects'
import { Resume } from '@/components/sections/resume'
import { Skills } from '@/components/sections/skills'

export default function Page() {
  return (
    <>
      <Loader />
      <ScrollProgress />
      <Background />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Certifications />
        <Education />
        <Resume />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
