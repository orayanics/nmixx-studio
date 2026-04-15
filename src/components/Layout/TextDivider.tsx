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
  speed = 30,
  className = '',
  textClassName = '',
  reverse = false,
}: TextDividerProps) {
  return (
    <div
      className={`h-fit w-full overflow-hidden py-2 border-y border-blue-500 ${className}`}
    >
      <div
        className={`flex w-max ${
          reverse ? 'animate-marquee-reverse' : 'animate-marquee'
        }`}
        style={{ animationDuration: `${speed}s` }}
      >
        {[0, 1].map((dup) => (
          <div key={dup} className={`flex font-bold ${textClassName}`}>
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
