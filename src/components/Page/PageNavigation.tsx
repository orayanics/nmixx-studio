import Logo from '@/components/Logo/Logo'

export default function Navigation() {
  return (
    <nav className="p-6">
      <div className="flex gap-3 items-center justify-between">
        <div>
          <Logo />
        </div>

        <div className="flex gap-4 text-lg  items-center">
          <a href="/playground">Home</a>
          <a href="/blog/1">Music</a>
          <a href="/blog/2">Video</a>
          <a href="/blog/2">About</a>
        </div>

        <div>
          <button>
            <a href="/(public)/login">Login</a>
          </button>
        </div>
      </div>
    </nav>
  )
}
