'use client'

import { motion, useScroll, useSpring } from 'framer-motion'

/** Thin gradient bar at the top of the viewport indicating scroll progress. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001,
  })

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-gradient-to-r from-primary to-[oklch(0.7_0.16_250)]"
      aria-hidden="true"
    />
  )
}
