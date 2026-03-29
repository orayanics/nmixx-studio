import { useDiscography } from '@/api/fetchDiscography'
import LoaderSpinner from '@/components/Loader/LoaderSpinner'
import LoaderError from '@/components/Loader/LoaderError'
import { sortByLatest } from '@/utils/parseDiscography'
// import { AlbumDisc } from '@/components/Disc'

export default function NmixxMusic() {
  const { data, isPending, isError } = useDiscography()
  const NMIXX = data?.NMIXX
  const FULL_ALBUMS = NMIXX?.['Full Albums']
  const EPS = NMIXX?.['EPs']
  const SINGLE_ALBUM = NMIXX?.['Single Albums']
  const DIGITAL_SINGLES = NMIXX?.['Digital Singles']
  const OST = NMIXX?.['OSTs']
  const COLLABS = NMIXX?.['Collaborations']
  const REMIXES = NMIXX?.['Remixes']

  const sortedAlbums = FULL_ALBUMS ? sortByLatest(FULL_ALBUMS) : []
  const sortedEp = EPS ? sortByLatest(EPS) : []
  const sortedSingles = SINGLE_ALBUM ? sortByLatest(SINGLE_ALBUM) : []
  const sortedDigitalSingles = DIGITAL_SINGLES
    ? sortByLatest(DIGITAL_SINGLES)
    : []
  const sortedOst = OST ? sortByLatest(OST) : []
  const sortedCollabs = COLLABS ? sortByLatest(COLLABS) : []
  const sortedRemixes = REMIXES ? sortByLatest(REMIXES) : []
  return (
    <div>
      {isPending ? (
        <LoaderSpinner isFullScreen />
      ) : isError ? (
        <LoaderError />
      ) : data ? (
        <pre>hi</pre>
      ) : null}

      {/* Full Albums */}
      {sortedAlbums.length > 0 && (
        <div>
          <h2>Full Albums</h2>
          <ul>
            {sortedAlbums.map((album) => (
              <li key={album.title}>
                <div>{album.title}</div>
                <div>{album.release}</div>
                <img
                  src={album.cover!}
                  alt={`${album.title} cover`}
                  width={200}
                />
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* EPs */}
      {sortedEp.length > 0 && (
        <div>
          <h2>Singles</h2>
          <ul>
            {sortedEp.map((album) => (
              <li key={album.title}>
                <div>{album.title}</div>
                <div>{album.release}</div>
                <img
                  src={album.cover!}
                  alt={`${album.title} cover`}
                  width={200}
                />
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Singles */}
      {sortedSingles.length > 0 && (
        <div>
          <h2>Full Albums</h2>
          <ul>
            {sortedSingles.map((album) => (
              <li key={album.title}>
                <div>{album.title}</div>
                <div>{album.release}</div>
                <img
                  src={album.cover!}
                  alt={`${album.title} cover`}
                  width={200}
                />
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Digital Singles */}
      {sortedDigitalSingles.length > 0 && (
        <div>
          <h2>Digital Singles</h2>
          <ul>
            {sortedDigitalSingles.map((album) => (
              <li key={album.title}>
                <div>{album.title}</div>
                <div>{album.release}</div>
                <img
                  src={album.cover!}
                  alt={`${album.title} cover`}
                  width={200}
                />
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* OSTs */}
      {sortedOst.length > 0 && (
        <div>
          <h2>OSTs</h2>
          <ul>
            {sortedOst.map((album) => (
              <li key={album.title}>
                <div>{album.title}</div>
                <div>{album.release}</div>
                <img
                  src={album.cover!}
                  alt={`${album.title} cover`}
                  width={200}
                />
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Collaborations */}
      {sortedCollabs.length > 0 && (
        <div>
          <h2>Collaborations</h2>
          <ul>
            {sortedCollabs.map((album) => (
              <li key={album.title}>
                <div>{album.title}</div>
                <div>{album.release}</div>
                <img
                  src={album.cover!}
                  alt={`${album.title} cover`}
                  width={200}
                />
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Remixes */}
      {sortedRemixes.length > 0 && (
        <div>
          <h2>Remixes</h2>
          <ul>
            {sortedRemixes.map((album) => (
              <li key={album.title}>
                <div>{album.title}</div>
                <div>{album.release}</div>
                <img
                  src={album.cover!}
                  alt={`${album.title} cover`}
                  width={200}
                />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
