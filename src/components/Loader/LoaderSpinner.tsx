import { LoaderCircle } from 'lucide-react'

interface LoaderSpinnerProps {
  isFullScreen?: boolean
}

export default function LoaderSpinner(props: LoaderSpinnerProps) {
  const { isFullScreen = false } = props
  const fullScreenClass =
    'absolute z-100 w-full bg-black/75 backdrop-blur-[5px] inset-0 flex flex-col justify-center items-center'
  return (
    <div className={isFullScreen ? fullScreenClass : ''}>
      <LoaderCircle className="animate-spin text-white" />
    </div>
  )
}
