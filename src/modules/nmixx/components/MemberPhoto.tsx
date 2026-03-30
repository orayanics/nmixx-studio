interface MemberPhotoProps {
  img: string
  title: string
  isBae?: boolean
}

export default function MemberPhoto({ img, title, isBae }: MemberPhotoProps) {
  return (
    <div className="col-span-12 lg:col-span-5 relative group border-4 border-blue-500 overflow-hidden bg-blue-900/20">
      <div className="absolute inset-0 bg-scanline pointer-events-none opacity-30 z-20" />
      <div className="absolute inset-0 bg-blue-500/10 mix-blend-color z-10" />

      <img
        src={img}
        alt={title}
        className="h-full object-cover grayscale contrast-[2] brightness-[0.8] transition-all duration-700 group-hover:scale-110"
        style={{
          transform: isBae ? 'scale(2.5) translate(-5%, 5%)' : '',
        }}
      />

      <div className="absolute bottom-4 left-4 border-4 bg-blue-500 text-black p-4 font-black text-4xl">
        [IDENTIFIED]
      </div>
    </div>
  )
}
