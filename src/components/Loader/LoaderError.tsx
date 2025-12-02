interface LoaderErrorProps {
  isFullScreen?: boolean
}

export default function LoaderError(props: LoaderErrorProps) {
  const { isFullScreen = false } = props
  const fullScreenClass =
    'absolute w-full bg-black/30 backdrop-blur-[1.2px] inset-0 flex flex-col justify-center items-center'
  return (
    <div className={`${isFullScreen && fullScreenClass}`}>
      <h1 className="text-xl text-white">Oops. Something went wrong.</h1>
      <p className="text-gray-400">
        Try refreshing the page or come back later.
      </p>
    </div>
  )
}
