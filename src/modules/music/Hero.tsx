import styles from '@/styles/Landing.module.css'
import sample from '@/assets/images/blue-valentine-1.jpg'

export default function Hero() {
  return (
    <section
      className={`${styles['landing-background']} ${styles['landing-background-gradient']} !mb-0`}
      style={{
        backgroundImage: `url(${sample})`,
      }}
    >
      <div className="z-20 text-white relative flex flex-col justify-center items-center h-full">
        {/* top right and top left */}
        <div className="absolute mt-20 sm:px-20 px-4 top-0 left-0 right-0 flex flex-row justify-between w-full">
          <div>
            <p className="text-2xl">NMIXX</p>
            <p className="text-lg italic">엔믹스</p>
          </div>
          <div className="text-right">
            <p className="text-2xl">2022.02.22</p>
            <p className="text-lg italic">Debut Date</p>
          </div>
        </div>

        {/* bottom right and bottom left */}
        <div className="absolute mt-20 sm:px-20 px-4 md:mb-0 mb-4 bottom-0 left-0 right-0 flex flex-row justify-between w-full">
          <div>
            <p className="text-2xl">Music</p>
            <p className="text-lg italic">음악</p>
          </div>
          <div className="text-right">
            <p className="text-2xl">JYP Entertainment</p>
            <p className="text-lg italic">Label</p>
          </div>
        </div>
      </div>
    </section>
  )
}
