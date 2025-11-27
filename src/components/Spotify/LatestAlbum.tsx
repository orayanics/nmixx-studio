import TextFade from '@/components/Dynamic/TextFade'

type SpotifyAlbum = {
  name: string
  artists: Array<string>
  releaseDate: string
  totalTracks: number
  imageUrl: string | null
  albumUrl: string
}

interface LatestAlbumProps {
  album: SpotifyAlbum
}
export default function LatestAlbum(props: LatestAlbumProps) {
  const { album } = props

  return (
    <div className="mb-4 w-full">
      {(() => {
        return (
          <div
            key={`${album.name}-${album.releaseDate}`}
            className="w-full flex md:flex-row flex-col justify-center items-center gap-4 p-4 mb-4 mx-auto"
          >
            {album.imageUrl ? (
              <div className="relative">
                <a href={album.albumUrl} target="_blank" rel="noreferrer">
                  <TextFade position="center" rounded>
                    <div className="flex flex-col justify-between">
                      <div>
                        <p className="text-4xl">{album.name}</p>
                        <p>{album.artists.join(', ')}</p>
                      </div>
                      <p style={{ fontSize: 12 }}>
                        Released: {album.releaseDate} · Tracks:{' '}
                        {album.totalTracks}
                      </p>
                    </div>
                  </TextFade>
                </a>

                <img
                  src={album.imageUrl}
                  alt={`${album.name} cover`}
                  className="rounded-lg object-cover w-full h-full"
                />
              </div>
            ) : (
              <div
                style={{
                  width: 128,
                  height: 128,
                  borderRadius: 8,
                  background: '#eee',
                }}
              />
            )}
          </div>
        )
      })()}
    </div>
  )
}
