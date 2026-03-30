type Align = 'left' | 'center' | 'right'

interface DuoScreenProps {
  align?: Align
  index: string
  title: string
  description: string
  names: string
  img: string
}

export default function DuoScreen(props: DuoScreenProps) {
  const { align = 'left', index, title, description, names, img } = props

  const alignmentStyles: Record<
    Align,
    {
      container: string
      text: string
      width: string
    }
  > = {
    left: {
      container: 'items-start',
      text: 'text-left items-start',
      width: 'w-screen',
    },
    center: {
      container: 'items-center',
      text: 'text-center items-center',
      width: 'w-screen',
    },
    right: {
      container: 'items-end',
      text: 'text-right items-end',
      width: 'w-screen',
    },
  }

  const styles = alignmentStyles[align]

  return (
    <div className="relative h-full w-full overflow-hidden group">
      {/* overlays */}
      <div className="absolute z-10 inset-0 bg-linear-to-t from-blue-600/40 to-transparent opacity-50 pointer-events-none" />
      <div className="absolute z-10 inset-0 halftone-aura opacity-30 group-hover:opacity-50 transition-opacity duration-500 pointer-events-none" />

      {/* content */}
      <div
        className={`h-full ${styles.width} absolute z-10 inset-0 p-8
        flex flex-col justify-center ${styles.container} gap-6`}
      >
        <div className={`w-full max-w-md flex flex-col gap-2 ${styles.text}`}>
          <p className="uppercase tracking-widest">{index}. blue valentine</p>

          <p className="font-serif text-3xl capitalize max-w-xs">
            {description}
          </p>

          <div className="w-fit border my-2 p-2">
            <p>{title}</p>
          </div>
        </div>

        <div className={`w-full max-w-xl flex flex-col ${styles.text}`}>
          <h1 className="font-serif italic text-xl capitalize">{names}</h1>
        </div>
      </div>

      {/* image */}
      <img src={img} alt={names} className="grayscale-100 contrast-[1.2]" />
    </div>
  )
}
