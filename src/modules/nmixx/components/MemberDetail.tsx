import { formatDate } from '@/utils/useDate'
interface MemberDetailProps {
  stageName: string
  birthday: string
  repAnimal: string
}

export default function MemberDetail({
  stageName,
  birthday,
  repAnimal,
}: MemberDetailProps) {
  return (
    <div className="bg-black border-4 border-blue-500 p-4 relative overflow-hidden">
      <div className="absolute top-2 right-2 text-[10px] opacity-50 uppercase tracking-[0.5em]">
        System.Profile.v3
      </div>
      <p
        className="w-full leading-none text-white uppercase font-bold flex justify-between border-b-2 border-black"
        style={{ fontSize: 'clamp(4rem, 10vw, 12rem)' }}
      >
        {stageName.split('').map((l, i) => (
          <span key={i}>{l}</span>
        ))}
      </p>

      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 border-t-2 border-blue-500/30 pt-4">
        <div>
          <p className="text-[10px] text-blue-300">BIRTH_ORIGIN</p>
          <p className="font-bold text-xl">{formatDate(birthday)}</p>
        </div>
        <div>
          <p className="text-[10px] text-blue-300">REP_ENTITY</p>
          <p className="font-bold text-xl">{repAnimal}</p>
        </div>
        <div className="col-span-2">
          <p className="text-[10px] text-blue-300">AUTHENTICATION_KEY</p>
          <p className="font-bold break-all opacity-80">
            NMIXX-{stageName.toUpperCase()}-2026-X
          </p>
        </div>
      </div>
    </div>
  )
}
