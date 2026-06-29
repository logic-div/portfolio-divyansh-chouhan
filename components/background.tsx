'use client'

/**
 * Decorative minimalist background:
 *  - extremely subtle grid overlay
 *  - soft background vignette matching Apple's design language
 */
export function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background" aria-hidden="true">
      {/* Subtle ambient light vignette */}
      <div 
        className="absolute inset-0 opacity-30 dark:opacity-40 blur-[100px]"
        style={{
          background: 'radial-gradient(circle at 50% -20%, var(--primary) 0%, transparent 60%)',
        }}
      />
      <div 
        className="absolute inset-0 opacity-10 dark:opacity-20 blur-[80px]"
        style={{
          background: 'radial-gradient(circle at 100% 60%, var(--primary) 0%, transparent 40%)',
        }}
      />

      {/* Very soft grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          color: 'var(--foreground)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
          maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
        } as any}
      />
    </div>
  )
}
