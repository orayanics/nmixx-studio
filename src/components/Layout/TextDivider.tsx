import type { ReactNode } from 'react'

interface TextDividerProps {
  text: ReactNode
  repeat?: number
  speed?: number // seconds
  className?: string
  textClassName?: string
  reverse?: boolean
}

export default function TextDivider({
  text,
  repeat = 10,
  speed = 12,
  className = '',
  textClassName = '',
  reverse = false,
}: TextDividerProps) {
  return (
    <div
      className={`h-fit w-screen overflow-hidden py-2 border-y-4 border-black ${className}`}
    >
      <div
        className={`flex w-max ${
          reverse ? 'animate-marquee-reverse' : 'animate-marquee'
        }`}
        style={{ animationDuration: `${speed}s` }}
      >
        {[0, 1].map((dup) => (
          <div
            key={dup}
            className={`flex whitespace-nowrap text-2xl font-black italic leading-relaxed ${textClassName}`}
          >
            {Array.from({ length: repeat }).map((_, i) => (
              <span key={i} className="mr-4">
                {text}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
