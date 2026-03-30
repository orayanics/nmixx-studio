export default function TextDivider() {
  return (
    <div className="h-fit w-screen bg-blue-500 overflow-hidden py-2 border-y-4 border-black">
      {/* Infinite Text, Scrolling/Carousel  */}
      <div className="flex w-max marquee text-(--background-dark)">
        <div className="leading-relaxed whitespace-nowrap text-2xl font-bold">
          blue valentine &nbsp; blue valentine &nbsp; blue valentine &nbsp; blue
          valentine &nbsp; blue valentine &nbsp; blue valentine &nbsp; blue
          valentine &nbsp; blue valentine &nbsp; blue valentine &nbsp; blue
          valentine &nbsp; blue valentine &nbsp; blue valentine &nbsp;
        </div>

        <div className="leading-relaxed whitespace-nowrap text-2xl font-bold">
          blue valentine &nbsp; blue valentine &nbsp; blue valentine &nbsp; blue
          valentine &nbsp; blue valentine &nbsp; blue valentine &nbsp; blue
          valentine &nbsp; blue valentine &nbsp; blue valentine &nbsp; blue
          valentine &nbsp; blue valentine &nbsp; blue valentine &nbsp;
        </div>
      </div>
    </div>
  )
}
