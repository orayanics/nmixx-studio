import { ErrorComponent, Link } from '@tanstack/react-router'
import type { ErrorComponentProps } from '@tanstack/react-router'

export default function DefaultCatchBoundary({ error }: ErrorComponentProps) {
  return (
    <div className="bg-blue-500 h-screen flex flex-col items-center justify-center font-mono gap-4">
      <h1 className="bg-gray-200 text-dark px-2">ERR</h1>
      <div className="text-white! [&_pre]:text-white! [&_pre]:border-white!">
        <ErrorComponent error={error} />
      </div>
      <Link to="/">
        Go Home<span className=" animate-ping">_</span>
      </Link>
    </div>
  )
}
