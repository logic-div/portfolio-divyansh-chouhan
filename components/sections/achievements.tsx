'use client'

import { animate, motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { achievements } from '@/lib/data'

export function Achievements() {
  return (
    <section className="px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-2 gap-px overflow-hidden border border-border/40 bg-border/40 rounded-2xl lg:grid-cols-4">
          {achievements.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center justify-center gap-1 p-8 text-center bg-card"
            >
              <Counter
                value={item.value}
                suffix={item.suffix}
                decimals={'decimals' in item ? (item.decimals as number) : 0}
              />
              <span className="text-xs uppercase tracking-wider font-bold text-muted-foreground">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Counter({
  value,
  suffix,
  decimals,
}: {
  value: number
  suffix: string
  decimals: number
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [display, setDisplay] = useState('0')

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(v.toFixed(decimals)),
    })
    return () => controls.stop()
  }, [inView, value, decimals])

  return (
    <span
      ref={ref}
      className="font-heading text-3xl font-black tracking-tight text-foreground sm:text-4xl"
    >
      {display}
      {suffix}
    </span>
  )
}
