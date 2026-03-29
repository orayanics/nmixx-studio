import Logo from '@/components/Logo/Logo'
import { SOCIALS } from '@/configs/socials'

export default function Footer() {
  return (
    <footer className="border-b-0! border-x-0! w-full glass--border px-4">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 py-10">
        <div className="flex flex-col gap-2">
          <Logo className="invert w-fit!" />
          <p className="text-gray-400">
            NMIXX Studio is a fan-made project and is not officially affiliated
            with JYP Entertainment or NMIXX.
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
          &copy; {new Date().getFullYear()} NMIXX Studio. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
