export default function BorderTop() {
  return (
    <>
      <div className="absolute -translate-x-1/2 -translate-y-1/2 w-10 h-10 text-blue-600 top-0 left-0">
        <svg viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 0 L 55 45 L 100 50 L 55 55 L 50 100 L 45 55 L 0 50 L 45 45 Z" />
        </svg>
      </div>
      <div className="absolute translate-x-1/2 -translate-y-1/2 w-10 h-10 text-blue-600 top-0 right-0">
        <svg viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 0 L 55 45 L 100 50 L 55 55 L 50 100 L 45 55 L 0 50 L 45 45 Z" />
        </svg>
      </div>
    </>
  )
}
