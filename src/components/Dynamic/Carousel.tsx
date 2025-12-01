import styles from './Carousel.module.css'

import TextFade from '@/components/Dynamic/TextFade'

interface CarouselProps {
  DECK: Array<{
    id: number
    title: string
    img: string
  }>
}

export default function Carousel(props: CarouselProps) {
  const { DECK } = props
  return (
    <div>
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div
          className={`${styles['carousel-track']} flex max-w-[90vw] overflow-hidden`}
        >
          <div className={`${styles['carousel-item']}`}>
            {DECK.map((card) => {
              return (
                <div key={card.id} className="relative">
                  <TextFade position="center">{card.title}</TextFade>
                  <img fetchPriority="high" src={card.img} alt={card.title} />
                </div>
              )
            })}
          </div>

          <div aria-hidden="true" className={`${styles['carousel-item']}`}>
            {DECK.map((card) => {
              return (
                <div key={card.id} className="relative">
                  <TextFade position="center">{card.title}</TextFade>
                  <img fetchPriority="high" src={card.img} alt={card.title} />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
