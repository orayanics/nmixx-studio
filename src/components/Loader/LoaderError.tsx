interface LoaderErrorProps {
  isFullScreen?: boolean
}

export default function LoaderError(props: LoaderErrorProps) {
  const { isFullScreen = false } = props
  const fullScreenClass =
    'absolute z-100 w-full bg-black/75 backdrop-blur-[5px] inset-0 flex flex-col justify-center items-center'
  return (
    <div className={`${isFullScreen && fullScreenClass}`}>
      <h1 className="text-xl text-white">Oops. Something went wrong.</h1>
      <p className="text-gray-400">
        Try refreshing the page or come back later.
      </p>
    </div>
  )
}
