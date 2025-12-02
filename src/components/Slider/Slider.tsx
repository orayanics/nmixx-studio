import useSlider from './useSlider'

export default function Slider({ children }: { children: React.ReactNode }) {
  const sliderRef = useSlider()

  return (
    <div
      ref={sliderRef}
      className="flex gap-4 max-w-full rounded-[var(--border-radius)] md:overflow-x-hidden overflow-x-auto overflow-y-hidden touch-pan-x my-6 scroll-smooth"
    >
      {children}
    </div>
  )
}
