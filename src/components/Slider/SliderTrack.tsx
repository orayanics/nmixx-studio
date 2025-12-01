import styles from './Slider.module.css'

interface SliderTrackProps {
  img: string
  href: string
  name: string
  artist: string
}

export default function SliderTrack(props: SliderTrackProps) {
  const { img, href, name, artist } = props

  return (
    <div
      className={`${styles['card--gradient']} relative w-auto flex items-center justify-center gap-4`}
    >
      <div className="md:w-[500px] w-60 rounded-[var(--border-radius)] overflow-hidden block">
        {/* Card */}
        <img
          src={img}
          alt={`${name} cover`}
          className="rounded-[var(--border-radius)] object-cover w-full h-full"
        />
      </div>

      <div className="absolute z-20 bottom-0 left-0 right-0 text-white text-center py-4">
        {/* Text Overlay */}
        <div>
          <p className="break-words font-bold md:text-4xl text-2xl w-60 mx-auto">
            <a href={href} target="_blank" rel="noreferrer">
              {name}
            </a>
          </p>
          <p className="text-gray-400 truncate">{artist}</p>
        </div>
      </div>
    </div>
  )
}
