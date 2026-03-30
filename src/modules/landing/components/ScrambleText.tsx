import { useState, useEffect } from 'react'

export const ScrambleText = ({
  text,
  delay = 0,
}: {
  text: string
  delay?: number
}) => {
  const [displayText, setDisplayText] = useState('')
  const chars = '!<>-_\\/[]{}—=+*^?#'

  useEffect(() => {
    let frame = 0
    const totalFrames = 16 // Adjust for speed
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        const scrambled = text
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' '
            // As we progress, lock in characters from left to right
            if (frame / totalFrames > index / text.length) return char
            return chars[Math.floor(Math.random() * chars.length)]
          })
          .join('')

        setDisplayText(scrambled)
        frame++

        if (frame > totalFrames) {
          setDisplayText(text)
          clearInterval(interval)
        }
      }, 60) // Speed of scramble
      return () => clearInterval(interval)
    }, delay)

    return () => clearTimeout(timer)
  }, [text, delay])

  return <span>{displayText}</span>
}
