import styles from './StackToCarousel.module.css'
import useStackToCarousel from './useStackToCarousel'
import useScreen from '@/utils/useScreen'
import TextFade from '@/components/Dynamic/TextFade'

interface StackToCarouselProps {
  DECK: Array<{
    id: number
    title: string
    img: string
  }>
}

export default function StackToCarousel(props: StackToCarouselProps) {
  const { DECK } = props

  const { isMobile } = useScreen()

  const {
    containerRef,
    spread,
    currentIndex,
    setCurrentIndex,
    count,
    spacing,
    isCarouselMode,
    handleMouseMove,
    handleMouseLeave,
  } = useStackToCarousel({ deck: DECK })

  const deckToRender = isCarouselMode ? [...DECK, ...DECK] : DECK
  const carouselTranslation = -(count * spacing)

  const excludeTitles = ['Bae', 'Jiwoo']

  return (
    <div ref={containerRef} className="min-h-[120vh] mx-2">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div className="perspective-[1000px] w-full h-full">
          <div
            className={`relative mt-2 ${isCarouselMode && styles['anim-carousel-left']}`}
            style={
              {
                '--carousel-translation': `${carouselTranslation}px`,
              } as React.CSSProperties
            }
          >
            {deckToRender.map((card, i) => {
              const isCloned = i >= count
              const cardIndex = isCloned ? i - count : i
              const index = (cardIndex - currentIndex + count) % count

              // 1. Stack Position
              const stackX = 0
              const stackY = index * 30
              const stackScale = 1 - index * 0.05

              // 2. Spread Position
              const spreadX = (i - (DECK.length - 1) / 2) * spacing
              const spreadY = 0
              const spreadScale = 1

              // 3. Interpolate
              const x = stackX + (spreadX - stackX) * spread
              const y = stackY + (spreadY - stackY) * spread
              const scale = stackScale + (spreadScale - stackScale) * spread

              // Fix z-index for seamless looping in carousel mode
              const zIndex = isCarouselMode ? DECK.length - i : count - index

              // 4. Opacity
              // Interpolate opacity for a smoother reveal
              const stackOpacity = index === 0 ? 1 : index <= 2 ? 1 : 0
              const opacity = stackOpacity + (1 - stackOpacity) * spread

              return (
                <div
                  key={`${card.id}-${deckToRender[cardIndex].id}-${i}`}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => {
                    if (!isCarouselMode) {
                      setCurrentIndex((prev) => (prev + 1) % count)
                    }
                  }}
                  className={`${styles.card}
                  ${isCarouselMode ? (isMobile ? styles['card-size--mobile-full'] : styles['card-size--desktop-full']) : isMobile ? styles['card-size--mobile-stack'] : styles['card-size--desktop-stack']}
                  cursor-pointer`}
                  style={{
                    zIndex: zIndex,
                    opacity: opacity,
                    transform: `translate(${x}px,${y}px) scale(${scale})`,
                  }}
                >
                  <TextFade
                    position={`${isCarouselMode ? 'bottom-right' : 'center'}`}
                  >
                    <code>{card.title}</code>
                  </TextFade>
                  <img
                    fetchPriority="high"
                    className={`${!isCarouselMode && (excludeTitles.includes(card.title) ? 'object-[-20%_20%]' : 'object-top')}
                    ${isCarouselMode && 'object-top'}
                    rounded-2xl`}
                    src={card.img}
                    alt={card.title}
                  />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
