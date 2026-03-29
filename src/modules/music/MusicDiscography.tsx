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

  return (
    <>
      {isPending ? (
        <LoaderSpinner isFullScreen />
      ) : isError ? (
        <LoaderError />
      ) : data ? (
        <div
          className="min-h-screen text-white font-mono uppercase"
          id="discography"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-2 p-4">
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
                  className={`group relative overflow-hidden flex! flex-col border rounded-sm border-white/20 ${size}`}
                >
                  {/* 1. TOP STATUS BAR (Industrial ID) */}
                  <div className="relative flex justify-between items-center px-4 py-2 text-[10px] font-bold">
                    <span>{serialNo}</span>
                    <span
                      className="bg-blue-500 text-white px-2
                      transition-colors duration-500
                    group-hover:bg-rose-500
                    "
                    >
                      LIVE_DATA
                    </span>
                  </div>

                  {/* 2. MAIN CONTENT AREA */}
                  <div
                    className="h-100 relative grow flex flex-col group
                    after:content-['']
                    after:absolute after:inset-0
                    after:bg-[rgba(88,160,255,0.3)]
                    after:opacity-0
                    after:mix-blend-color
                    after:pointer-events-none
                    after:transition-opacity after:duration-1000
                    transition-all duration-1000 ease-[cubic-bezier(0.075,0.82,0.165,1)]

                    hover:after:opacity-100
                    hover:after:duration-1000"
                  >
                    {/* Background Artwork - Industrial Filter */}
                    <div className="absolute z-10 inset-0 halftone-aura opacity-30 group-hover:opacity-50 transition-opacity duration-500 pointer-events-none" />

                    <img
                      src={album.cover!}
                      alt={album.title}
                      className="absolute inset-0 w-full h-full object-cover
                    opacity-40
                    filter-[grayscale(1)_contrast(5)_blur(2px)_brightness(1)]
                    transition-[filter] duration-1000 ease-[cubic-bezier(0.075,0.82,0.165,1)]
                    group-hover:filter-[grayscale(1)_contrast(2)_blur(0px)_brightness(1)]"
                    />

                    {/* UI Elements Overlay */}
                    <div className="relative z-10 h-full flex flex-col justify-between p-4">
                      <div className="flex justify-between items-start">
                        <div
                          className="md:text-2xl font-black leading-none wrap-break-words max-w-[80%] 
                          transition-colors duration-500  
                        group-hover:text-rose-500"
                        >
                          {album.title}
                        </div>
                        <div className="border border-white p-2 text-[10px] origin-top-right">
                          {album.type}
                        </div>
                      </div>

                      {/* 3. BOTTOM MANIFEST (Metadata) */}
                      <div className="border-t border-white/20 flex flex-col gap-1">
                        <div className="flex justify-between items-end pt-2">
                          <div className="text-xs leading-none">
                            <p
                              className="text-blue-500
                              transition-colors duration-500
                            group-hover:text-rose-500"
                            >
                              RELEASED //
                            </p>
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
      ) : null}
    </>
  )
}
