import { LoaderCircle } from 'lucide-react'

interface LoaderSpinnerProps {
  isFullScreen?: boolean
}

export default function LoaderSpinner(props: LoaderSpinnerProps) {
  const { isFullScreen = false } = props
  const fullScreenClass =
    'absolute w-full bg-black/30 backdrop-blur-[1.2px] inset-0 flex flex-col justify-center items-center'
  return (
    <div className={isFullScreen ? fullScreenClass : ''}>
      <LoaderCircle className="animate-spin text-white" />
    </div>
  )
}
