import Hero from './Hero'
import Section from './Section'

export default function index() {
  return (
    <>
      <Hero />

      <div
        className="mx-auto py-10 px-5
        relative w-full max-w-5xl
       flex flex-col justify-center items-center"
      >
        <Section />
      </div>
    </>
  )
}
