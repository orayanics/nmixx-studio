import Logo from '@/components/Logo/Logo'
import { SOCIALS } from '@/configs/socials'
import Planet from '../Dynamic/Planet'
import BorderTop from '../Layout/BorderTop'

export default function Footer() {
  return (
    <>
      <Planet />
      <footer
        className="relative z-50 backdrop-blur-sm bg-linear-to-t from-blue-500/10 via-transparent to-transparent h-full
      md:overflow-visible overflow-hidden"
      >
        <div className="max-w-7xl mx-auto relative border border-blue-500/40 rounded-sm shadow-2xl p-10">
          <BorderTop />
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4 py-10">
            <div className="flex flex-col gap-2">
              <Logo className="invert w-fit!" />
              <p className="text-gray-400">
                NMIXX Studio is a fan-made project and is not officially
                affiliated with JYP Entertainment or NMIXX.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="font-bold mb-4 text-gray-200">Socials</h3>
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.to}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          <div className="pb-6">
            <hr className="border-white/20 mb-6" />
            <p className="text-gray-200">
              &copy; {new Date().getFullYear()} NMIXX Studio. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
