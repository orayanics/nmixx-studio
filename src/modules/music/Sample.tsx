import { LANDING_DECK } from '@/configs/landing'
import { LANDING_BACKGROUND } from '@/configs/landing'
const NMIXX_MEMBERS = ['LILY', 'HAEWON', 'SULLYOON', 'BAE', 'JIWOO', 'KYUJIN']

const PortraitCard = ({
  name,
  zoom = 1,
  focus = { x: '50%', y: '50%' },
}: {
  name: string
  zoom?: number
  focus?: { x: string; y: string }
}) => {
  const selected = LANDING_DECK.find(
    (item) => item.title.toUpperCase() === name,
  )
  return (
    <div className="relative aspect-3/4 border border-border overflow-hidden bg-card group">
      <div
        className={`absolute z-10 inset-0 halftone-aura opacity-30 group-hover:opacity-50 transition-opacity duration-500`}
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src={selected?.img || ''}
          alt={name}
          className="zine-image object-cover w-full h-full"
          style={{
            transform: `scale(${zoom}) translate(-${focus.x}, -${focus.y})`,
            transformOrigin: `${focus.x} ${focus.y}`,
          }}
        />
      </div>

      <div className="absolute bottom-2 left-2 bg-white text-black px-2 py-0.5 text-xs font-bold tracking-tighter">
        {name}
      </div>
    </div>
  )
}
export const NmixxHero = () => {
  //   const containerRef = useRef<HTMLDivElement>(null)

  //   const { scrollYProgress } = useScroll({
  //     target: containerRef,
  //     offset: ['start start', 'end start'],
  //   })

  //   const textY = useTransform(scrollYProgress, [0, 0.5], [0, -200])
  //   const textOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0])
  //   const dashboardY = useTransform(scrollYProgress, [0, 1], [0, -250])

  return (
    <>
      {/* Text Hero */}
      <div className="min-h-screen flex flex-col items-center justify-center gap-2">
        <div className="space-x-6">
          {NMIXX_MEMBERS.map((name) => (
            <span
              key={name}
              className="text-xs md:text-xl font-bold tracking-widest uppercase"
            >
              {name}
            </span>
          ))}
        </div>

        <div className="text-center space-y-2">
          <h1 className="text-9xl font-bold tracking-tighter uppercase">
            NMIXX{' '}
            <span className="font-serif italic font-normal lowercase">
              Studio
            </span>
          </h1>
          <p className="text-lg md:text-xl tracking-widest uppercase opacity-80">
            The MIXX Pop Wave Starts Now
          </p>
        </div>
      </div>

      {/* Zine-Grid Hero */}
      <div className="min-h-screen w-full p-4 rounded-sm shadow-2xl backdrop-blur-sm border border-white/10 flex items-center">
        <div className="flex flex-col gap-2 w-full">
          {/* Section 1: Triple Columns */}
          <div className="grid grid-cols-3 gap-2">
            <PortraitCard
              name="LILY"
              zoom={2.2}
              focus={{ x: '23%', y: '1%' }}
            />
            <PortraitCard
              name="HAEWON"
              zoom={2.2}
              focus={{ x: '12%', y: '0%' }}
            />
            <PortraitCard
              name="SULLYOON"
              zoom={2.2}
              focus={{ x: '13%', y: '1%' }}
            />
          </div>

          {/* Section 2: Full Width Banner */}
          <div className="border">
            <img
              src={LANDING_BACKGROUND}
              className="zine-image w-full h-full object-cover"
              alt="Full Group"
            />
          </div>

          {/* Section 3: Triple Columns */}
          <div className="grid grid-cols-3 gap-2">
            <PortraitCard name="BAE" zoom={3} focus={{ x: '20%', y: '8%' }} />
            <PortraitCard
              name="JIWOO"
              zoom={2.2}
              focus={{ x: '25%', y: '15%' }}
            />
            <PortraitCard
              name="KYUJIN"
              zoom={5}
              focus={{ x: '20%', y: '3%' }}
            />
          </div>
        </div>
      </div>
    </>
  )
}
