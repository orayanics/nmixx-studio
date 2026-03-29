import styles from './Slider.module.css'

interface SliderTrackProps {
  img: string
  href?: string
  name: string
  artist: string
}

export default function SliderTrack(props: SliderTrackProps) {
  const { img, href, name, artist } = props

  return (
    <div
      className={`${styles['card--gradient']} relative w-auto flex items-center justify-center gap-4`}
    >
      <div className="md:w-125 w-60 rounded-(--border-radius) overflow-hidden block">
        {/* Card */}
        <img
          src={img}
          alt={`${name} cover`}
          className="rounded-(--border-radius) object-cover w-inherit h-inherit"
        />
      </div>

      <div className="absolute z-20 bottom-0 left-0 right-0 text-white text-center py-4">
        {/* Text Overlay */}
        <div>
          <a href={href} target="_blank" rel="noreferrer">
            <p className="md:wrap-break-words truncate font-bold md:text-4xl text-2xl w-[80%] mx-auto">
              {name}
            </p>
          </a>

          <p className="text-gray-400 w-[80%] mx-auto truncate">{artist}</p>
        </div>
      </div>
    </div>
  )
}
