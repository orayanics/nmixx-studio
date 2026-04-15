interface VideoCardProps {
  img: string
  href?: string
  name: string
  artist: string
}

export default function VideoCard({ img, href, name, artist }: VideoCardProps) {
  return (
    <div className="group relative bg-neutral-950 border border-blue-500/40 p-2 transition-all hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[12px_12px_0px_0px_#3b82f6]">
      {/* Top Tape Label */}
      <div className="absolute left-1/2 -translate-x-1/2 z-30">
        <span className="tape-effect text-[10px] whitespace-nowrap uppercase">
          {name}
        </span>
      </div>

      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="block relative overflow-hidden"
      >
        {/* Image Container */}
        <div className="aspect-video overflow-hidden border-2 border-blue-500/40 bg-blue-900">
          <img
            src={img}
            alt={name}
            className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
          />
          {/* Scanline Overlay */}
          <div
            className="absolute inset-0
          bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))]
          bg-size-[100%_2px,3px_100%]
          pointer-events-none"
          />
        </div>

        {/* Content Info */}
        <div className="mt-4 p-2 bg-blue-500 text-black border-t-4 border-black">
          <h3 className="font-black text-xl md:text-2xl uppercase leading-none truncate">
            {name}
          </h3>
          <div className="flex justify-between items-center mt-2 border-t border-black/20 pt-1 text-[10px] font-bold">
            <span>INDEX: {artist}</span>
            <span>TYPE: PL_FILE</span>
          </div>
        </div>
      </a>
    </div>
  )
}
