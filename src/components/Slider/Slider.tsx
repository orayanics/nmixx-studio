import useSlider from './useSlider'

export default function Slider({ children }: { children: React.ReactNode }) {
  const sliderRef = useSlider()

  return (
    <div
      ref={sliderRef}
      className="flex gap-4 max-w-full rounded-[var(--border-radius)] overflow-x-hidden overflow-y-hidden my-6 scroll-smooth scrollbar-hide"
    >
      {children}
    </div>
  )
}
