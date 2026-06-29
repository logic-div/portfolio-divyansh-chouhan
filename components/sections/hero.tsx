'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Download, Mail, Sparkles } from 'lucide-react'
import Image from 'next/image'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'
import { profile } from '@/lib/data'
import { useTypewriter } from '@/lib/use-typewriter'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center px-4 pb-16 pt-32 sm:px-6"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12">
        {/* Top Tier: Huge Editorial Headers */}
        <div className="w-full border-b border-border/20 pb-8">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-heading text-sm font-bold uppercase tracking-wider text-muted-foreground"
          >
            Hello, I&apos;m {profile.name}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-2 text-left font-heading text-[12vw] font-black uppercase leading-[0.85] tracking-[-0.05em] text-foreground sm:text-[10vw] md:text-[8vw] lg:text-[7.5vw]"
          >
            AI & ML ENGINEER +<br />
            DEVELOPER
          </motion.h1>
        </div>

        {/* Bottom Tier: 3-Column Split */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.1fr_0.8fr_1.1fr] lg:gap-12 items-start">
          {/* Column 1: Bio & Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <p className="text-sm leading-relaxed text-muted-foreground">
              {profile.tagline}
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-foreground text-background font-bold text-[10px] uppercase tracking-wider px-5 py-3 hover:opacity-90 transition-opacity"
              >
                Contact Now &rarr;
              </a>
              <a
                href={profile.resumeUrl}
                download
                className="inline-flex items-center gap-2 border border-border bg-card px-5 py-3 text-[10px] uppercase tracking-wider font-bold hover:bg-secondary transition-colors"
              >
                Resume &darr;
              </a>
            </div>
            
            <div className="flex items-center gap-4 mt-2">
              <SocialLink href={profile.socials.github} label="GitHub">
                <GithubIcon className="size-4" />
              </SocialLink>
              <SocialLink href={profile.socials.linkedin} label="LinkedIn">
                <LinkedinIcon className="size-4" />
              </SocialLink>
              <SocialLink href={`mailto:${profile.email}`} label="Email">
                <Mail className="size-4" />
              </SocialLink>
            </div>
          </motion.div>

          {/* Column 2: Square Portrait Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-[200px] aspect-[4/5] overflow-hidden rounded-xl border border-border/40 bg-card p-1 shadow-sm">
              <Image
                src={profile.avatar}
                alt={`Portrait of ${profile.name}`}
                fill
                priority
                className="rounded-lg object-cover"
              />
            </div>
          </motion.div>

          {/* Column 3: Skills Matrix */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col gap-4"
          >
            <h3 className="font-heading text-xs font-bold uppercase tracking-widest text-muted-foreground">
              Core Expertise
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col border-t border-border/30 pt-2">
                <span className="text-[9px] uppercase tracking-wider font-bold text-muted-foreground">01 / ML Frameworks</span>
                <span className="text-xs font-semibold mt-0.5">PyTorch, TensorFlow</span>
              </div>
              <div className="flex flex-col border-t border-border/30 pt-2">
                <span className="text-[9px] uppercase tracking-wider font-bold text-muted-foreground">02 / Languages</span>
                <span className="text-xs font-semibold mt-0.5">Python, C++, SQL</span>
              </div>
              <div className="flex flex-col border-t border-border/30 pt-2">
                <span className="text-[9px] uppercase tracking-wider font-bold text-muted-foreground">03 / Core Areas</span>
                <span className="text-xs font-semibold mt-0.5">Deep Learning, NLP</span>
              </div>
              <div className="flex flex-col border-t border-border/30 pt-2">
                <span className="text-[9px] uppercase tracking-wider font-bold text-muted-foreground">04 / Developer Tools</span>
                <span className="text-xs font-semibold mt-0.5">Git, Docker, Linux</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function SocialLink({
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
      className="text-muted-foreground transition-colors hover:text-foreground"
    >
      {children}
    </a>
  )
}

function FloatingBadge({
  children,
  className,
  delay,
}: {
  children: React.ReactNode
  className?: string
  delay: number
}) {
  return (
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay }}
      className={`glass absolute flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium border border-border/40 shadow-sm ${className}`}
    >
      {children}
    </motion.div>
  )
}
