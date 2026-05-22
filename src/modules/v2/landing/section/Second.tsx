import { motion } from 'framer-motion'
import { starAnimation } from '@/configs/animations'
import { NMIXX_MEMBERS } from '@/configs/landing'

import {
  StarFour,
  StarSmall,
  StarThree,
  StarTwo,
} from '@/components/Decorator/Stars'
import { Heavy, Serenade } from '../components/TextHS'
import SECOND_IMAGE from '@/assets/v2/hc_2.webp'
import THIRD_IMAGE from '@/assets/v2/hc_3.webp'

export default function Second() {
  return (
    <div className="space-y-20">
      <div className="relative">
        <div className="relative grid grid-cols-1 md:grid-cols-2">
          <div
            className="relative z-11 flex justify-end col-span-2
          w-full h-full md:pt-40 pt-20"
          >
            <Heavy />
          </div>

          <div className="relative -mt-40">
            <motion.div
              className="absolute z-10 md:-top-40 md:left-90 -top-1 left-0"
              {...starAnimation}
            >
              <StarTwo />
            </motion.div>

            <motion.div
              className="absolute z-11 md:left-136 left-42"
              {...starAnimation}
            >
              <StarSmall />
            </motion.div>

            <motion.div
              className="absolute z-11 md:-right-70 -right-5 md:top-0 top-20 md:w-64 w-30 md:block hidden"
              {...starAnimation}
            >
              <StarThree />
            </motion.div>

            <motion.div
              className="absolute z-11 md:top-30 md:-right-100 top-26 right-30"
              {...starAnimation}
            >
              <StarSmall />
            </motion.div>

            <motion.div
              className="absolute -top-20 left-20 z-10"
              {...starAnimation}
            >
              <StarSmall />
            </motion.div>

            <motion.div
              className="absolute top-10 left-80 z-10 md:block hidden"
              {...starAnimation}
            >
              <StarSmall />
            </motion.div>

            <motion.div
              className="absolute -top-4 left-20 z-10 md:block hidden"
              {...starAnimation}
            >
              <StarFour />
            </motion.div>

            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              src={SECOND_IMAGE}
              alt="SECOND_IMAGE"
              className="absolute -top-50 left-10 z-9! w-100 h-auto object-cover md:block hidden"
            />

            <div className="relative z-12 md:top-0 top-22 md:w-full w-54">
              <Serenade />
            </div>
          </div>
        </div>
      </div>

      <div className="flex md:flex-row flex-col gap-10 justify-between md:pt-40 pt-20">
        <div>
          <p className="font-semibold text-xl tracking-wide">
            은하수 아래서 take my hands 시들지 않을 꿈에 널 데려가고 있잖아
            <br />
            봄 지나 겨울 와도 다시 피어날 my heart 커진 심장 소릴 들어봐
            <br />
            영원히 기억될 이 순간 가사가 된 꽃잎들을 봐 이미 넌 불러본 멜로디
          </p>
        </div>

        <div className="text-right">
          {NMIXX_MEMBERS.map((member) => (
            <p key={member}>{member}</p>
          ))}
        </div>
      </div>

      <div>
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ margin: '-300px' }}
          src={THIRD_IMAGE}
          alt="THIRD_IMAGE"
          className="w-full h-auto object-cover
          border border-black"
        />
      </div>
    </div>
  )
}
