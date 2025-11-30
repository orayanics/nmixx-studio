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
        <div className="absolute mt-20 sm:px-20 px-6 top-0 left-0 right-0 flex flex-row items-center justify-between w-full">
          <div>
            <p className="text-2xl">NMIXX</p>
            <p className="text-lg italic">엔믹스</p>
          </div>
          <hr className="border-white w-100 mb-0" />
          <div className="text-right">
            <p className="text-2xl">22.02.22</p>
            <p className="text-lg italic">Debut</p>
          </div>
        </div>

        {/* center */}
        <div className="absolute top-1/2 -translate-y-1/2 w-full text-center px-4">
          <h1 className="text-6xl">Blue Valentine</h1>
        </div>

        {/* bottom right and bottom left */}
        <div className="absolute mt-20 sm:px-20 px-6 md:mb-20 mb-4 bottom-0 left-0 right-0 flex items-center flex-row justify-between w-full">
          <div>
            <p className="text-lg">Discover</p>
            <p className="text-2xl italic">more music</p>
          </div>
          <hr className="border-white w-100 mb-0" />
          <div className="text-right">
            <p className="text-lg">Blue Valentine</p>
            <p className="text-2xl italic">1st Full Album</p>
          </div>
        </div>
      </div>
    </section>
  )
}
