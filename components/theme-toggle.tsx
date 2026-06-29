'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  const isDark = resolvedTheme === 'dark'

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label="Toggle color theme"
      className="relative inline-flex size-9 items-center justify-center rounded-full border border-border bg-card/50 text-foreground transition-colors hover:border-primary/50 hover:text-primary"
    >
      {mounted && (
        <span className="relative block size-[18px]">
          <Sun
            className={`absolute inset-0 size-[18px] transition-all duration-300 ${
              isDark ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'
            }`}
          />
          <Moon
            className={`absolute inset-0 size-[18px] transition-all duration-300 ${
              isDark ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'
            }`}
          />
        </span>
      )}
    </button>
  )
}
