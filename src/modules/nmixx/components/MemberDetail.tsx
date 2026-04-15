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
    <div className="bg-dark border md:border-r-0 border-blue-500/40 relative overflow-hidden">
      <p
        className="w-full text-white uppercase font-bold flex justify-between px-4"
        style={{ fontSize: 'clamp(4rem, 10vw, 12rem)' }}
      >
        {stageName.split('').map((l, i) => (
          <span key={i}>{l}</span>
        ))}
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-blue-500/40 p-4">
        <div>
          <p className="text-xs text-white">BIRTH_ORIGIN</p>
          <p className="font-bold text-xl">{formatDate(birthday)}</p>
        </div>
        <div>
          <p className="text-xs text-white">REP_ENTITY</p>
          <p className="font-bold text-xl">{repAnimal}</p>
        </div>
        <div className="col-span-2">
          <p className="text-xs text-white">AUTHENTICATION_KEY</p>
          <p className="font-bold break-all">
            NMIXX-{stageName.toUpperCase()}-2026-X
          </p>
        </div>
      </div>
    </div>
  )
}
