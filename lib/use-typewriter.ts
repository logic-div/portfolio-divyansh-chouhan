'use client'

import { useEffect, useState } from 'react'

/** Cycles through phrases with a typing / deleting effect. */
export function useTypewriter(words: string[], typing = 70, deleting = 40, pause = 1400) {
  const [text, setText] = useState('')
  const [index, setIndex] = useState(0)
  const [deletingState, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[index % words.length]
    let timeout: ReturnType<typeof setTimeout>

    if (!deletingState && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deletingState && text === '') {
      setDeleting(false)
      setIndex((i) => i + 1)
    } else {
      timeout = setTimeout(
        () => {
          setText((prev) =>
            deletingState
              ? current.slice(0, prev.length - 1)
              : current.slice(0, prev.length + 1),
          )
        },
        deletingState ? deleting : typing,
      )
    }
    return () => clearTimeout(timeout)
  }, [text, deletingState, index, words, typing, deleting, pause])

  return text
}
