import { Link } from '@tanstack/react-router'
export default function NotFound() {
  return (
    <div className="bg-blue-500 h-screen flex items-center justify-center">
      <div
        className="flex flex-col items-center gap-4
      font-mono"
      >
        <h1 className="bg-gray-200 text-dark px-2">ERR 404</h1>

        <p>You're trying to access a non-existent page. Try again, yeah?</p>
        <p>You're trying to access a non-existent page. Try again, yeah?</p>
        <p>You're trying to access a non-existent page. Try again, yeah?</p>

        <Link to="/">
          Go Home<span className=" animate-ping">_</span>
        </Link>
      </div>
    </div>
  )
}
