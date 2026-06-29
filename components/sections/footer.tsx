import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon, TwitterIcon } from '@/components/brand-icons'
import { navLinks, profile } from '@/lib/data'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border px-4 py-12 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center">
        <a
          href="#home"
          className="font-heading text-sm font-bold uppercase tracking-widest text-foreground"
        >
          {profile.name}
        </a>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[10px] uppercase tracking-wider font-bold text-muted-foreground">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-foreground">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <FooterIcon href={profile.socials.github} label="GitHub">
            <GithubIcon className="size-5" />
          </FooterIcon>
          <FooterIcon href={profile.socials.linkedin} label="LinkedIn">
            <LinkedinIcon className="size-5" />
          </FooterIcon>
          <FooterIcon href={profile.socials.twitter} label="Twitter">
            <TwitterIcon className="size-5" />
          </FooterIcon>
          <FooterIcon href={`mailto:${profile.email}`} label="Email">
            <Mail className="size-5" />
          </FooterIcon>
        </div>

        <p className="text-xs text-muted-foreground">
          &copy; {year} {profile.name}. Built with Next.js, Tailwind CSS & Framer Motion.
        </p>
      </div>
    </footer>
  )
}

function FooterIcon({
  href,
  label,
  children,
}: {
  href: string
  label: string
  children: React.ReactNode
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="text-muted-foreground transition-all hover:-translate-y-0.5 hover:text-foreground"
    >
      {children}
    </a>
  )
}
