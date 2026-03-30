import type { Album } from '@/types/scrape'

interface MemberDiscographyProps {
  releases: (Album & {
    type: 'OST_DATA' | 'COLLAB_FILE'
  })[]
}

export default function MemberDiscography({
  releases,
}: MemberDiscographyProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 grow">
      {releases.map((item, idx) => (
        <div
          key={idx}
          className="bg-(--background-dark) border-4 border-blue-500 p-3 relative group hover:bg-blue-500 hover:text-black transition-colors overflow-hidden"
        >
          <div className="flex gap-4">
            <div className="w-24 h-24 shrink-0 border border-blue-500 overflow-hidden grayscale contrast-150">
              <img
                src={item.cover!}
                className="w-full h-full object-cover group-hover:scale-125 transition-transform"
              />
            </div>

            <div className="flex flex-col justify-between">
              <span className="text-[10px] bg-blue-500 text-black px-1 self-start font-bold group-hover:bg-black group-hover:text-blue-500">
                {item.type}
              </span>

              <h4 className="font-black text-lg leading-none uppercase mt-1">
                {item.title}
              </h4>

              <div className="text-[10px] opacity-70 mt-2">
                DATE: {item.year} // LEN: {item.length}
              </div>
            </div>
          </div>

          <div className="absolute bottom-[-22%] -right-1 text-[6rem] font-black opacity-10 italic select-none">
            #{idx + 1}
          </div>
        </div>
      ))}

      <EmptyCard />
    </div>
  )
}

function EmptyCard() {
  return (
    <div className="border-2 border-dashed border-blue-500/50 flex flex-col items-center justify-center p-4 opacity-40">
      <div className="animate-pulse">WAITING FOR DATA...</div>
      <div className="w-full h-1 bg-blue-500/20 mt-2" />
    </div>
  )
}
