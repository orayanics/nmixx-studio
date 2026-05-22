import { useDiscography } from '@/api/fetchDiscography'
import LoaderSpinner from '@/components/Loader/LoaderSpinner'
import LoaderError from '@/components/Loader/LoaderError'
import { sortByLatest } from '@/utils/parseDiscography'

export default function MusicDiscography() {
  const { data, isPending, isError } = useDiscography()
  const NMIXX = data?.NMIXX
  const allReleases = [
    ...(NMIXX?.['Full Albums']
      ? sortByLatest(NMIXX['Full Albums']).map((a) => ({ ...a, type: 'LP' }))
      : []),
    ...(NMIXX?.['EPs']
      ? sortByLatest(NMIXX['EPs']).map((a) => ({ ...a, type: 'EP' }))
      : []),
    ...(NMIXX?.['Single Albums']
      ? sortByLatest(NMIXX['Single Albums']).map((a) => ({ ...a, type: 'SN' }))
      : []),
    ...(NMIXX?.['Digital Singles']
      ? sortByLatest(NMIXX['Digital Singles']).map((a) => ({
          ...a,
          type: 'DS',
        }))
      : []),
    ...(NMIXX?.['OSTs']
      ? sortByLatest(NMIXX['OSTs']).map((a) => ({ ...a, type: 'OS' }))
      : []),
  ]

  if (isPending) return <LoaderSpinner isFullScreen />
  if (isError || !data) return <LoaderError isFullScreen />

  return (
    <div
      className="min-h-screen text-white font-mono uppercase"
      id="discography"
    >
      <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px]">
        {allReleases.map((album, i) => {
          const size =
            i % 7 === 0
              ? 'col-span-2 row-span-2'
              : i % 5 === 0
                ? 'col-span-2'
                : i % 3 === 0
                  ? 'row-span-2'
                  : ''

          const serialNo = `NM-X${i.toString().padStart(3, '0')}`

          return (
            <div
              key={album.title}
              className={`relative overflow-hidden flex flex-col border border-blue-500/40 ${size}`}
            >
              <div className="relative flex justify-between items-center px-4 py-2 text-[10px] font-bold">
                <span>{serialNo}</span>
                <span className="bg-blue-500 text-white px-2">LIVE_DATA</span>
              </div>

              <div className="relative grow flex flex-col h-full group">
                <div className="absolute z-20! inset-0 halftone-aura opacity-40" />

                <img
                  src={album.cover!}
                  alt={album.title}
                  className="w-full h-full object-cover
                      opacity-40 saturate-0 group-hover:opacity-60 group-hover:saturate-150 transition-all duration-500"
                />

                <div className="absolute z-10 h-full w-full flex flex-col justify-around py-10 px-4">
                  <div className="flex-1 flex justify-between items-start">
                    <div className="md:text-2xl font-black leading-none wrap-break-words max-w-[80%]">
                      {album.title}
                    </div>
                    <div className="border border-white p-2 text-[10px] origin-top-right">
                      {album.type}
                    </div>
                  </div>

                  <div className="flex-0 border-t border-white/20 flex flex-col gap-1">
                    <div className="flex justify-between items-end pt-2">
                      <div className="text-xs leading-none">
                        <p className="text-blue-500">RELEASED //</p>
                        <p className="text-white">
                          {album.release || 'UNKNOWN'}
                        </p>
                      </div>

                      <div className="h-6 w-12 bg-[repeating-linear-gradient(90deg,#fff_0,#fff_1px,transparent_1px,transparent_3px)] opacity-40" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
