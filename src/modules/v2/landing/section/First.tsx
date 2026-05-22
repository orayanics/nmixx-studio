import { motion } from 'framer-motion'

import TextBlooming from '../components/TextBlooming'
import TextWere from '../components/TextWere'
import { StarOne, StarSmall } from '@/components/Decorator/Stars'
import ImageOne from '@/assets/v2/hv_1.webp'

import { starAnimation } from '@/configs/animations'
export default function First() {
  return (
    <div className="space-y-40">
      <div className="w-full grid grid-cols-2 max-h-46 md:max-h-100">
        <div className="">
          <div className="relative z-10">
            <TextBlooming />
          </div>

          <motion.div
            className="absolute z-11 md:top-10 md:left-76 -top-1 right-10 md:w-100 w-50"
            {...starAnimation}
          >
            <StarOne className="w-full h-full" />
          </motion.div>

          <div className="relative z-12">
            <TextWere />
          </div>
        </div>

        <div>
          <motion.img
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            src={ImageOne}
            alt="ImageOne"
            className="w-full h-full object-cover
            "
          />
        </div>
      </div>

      <div className="w-full flex md:flex-row flex-col justify-between items-center gap-2">
        <p className="md:text-left text-center">
          어린 맘속 헤매던 cosmos
          <br /> 터진 눈물 잃어버린 color
        </p>

        <motion.div {...starAnimation}>
          <StarSmall />
        </motion.div>

        <p className="text-center">
          But I’m with you, every day and
          <br />
          모든 별을 안고서 keep dreamin’
        </p>

        <motion.div {...starAnimation}>
          <StarSmall />
        </motion.div>

        <p className="md:text-right text-center">
          날 깨뜨려서 만들래
          <br />단 하나뿐인 bouquet
        </p>
      </div>
    </div>
  )
}
