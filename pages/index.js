import Image from 'next/image';
import JsIcon from '../components/jsicon.js'
import ReactIcon from '../components/reacticon.js'
import NextIcon from '../components/nexticon'
import TailwindIcon from '../components/tailwind.js' 


export default function Home() {
  let iconColor = '#ffd479'

  return (
    <div className="flex flex-col items-center gap-12 pb-44 pt-16 md:flex-row-reverse md:gap-6 md:pt-20">
      <div className="group relative flex h-40 w-40 items-center justify-center md:h-52 md:w-52 md:flex-1">
        <div className="overflow-hidden drop-shadow-lg">
          <Image
            src="/rossi.jpg"
            alt="Ross Woodhurst"
            width={250}
            height={250}
            className="rounded-lg overflow-hidden"
          />
          </div>
      </div>

      <div className="mx-10 md:mx-2 flex flex-[2] flex-col items-center gap-4 md:items-start">
        <h1 className="text-4xl font-extrabold">
          Hi, I&#39;m Ross
        </h1>
        <p className="text-center leading-7 md:text-left">
          A Freelance Web Developer from York, England. I work with <span className="underline underline-offset-4 decoration-yellow-50"><b>React</b></span> and <span className="underline underline-offset-4 decoration-yellow-50"><b>Next.js</b></span>.
          I love to build things that make your life easier.
        </p>

        <div className="flex flex-col items-center gap-4 md:items-start">
          <p className="text-center leading-7 md:text-left"><b>🧰 Toolbox:</b></p>
          <div className="flex gap-4">
            <div className='w-8 h-8 rounded-lg overflow-hidden'>
              <JsIcon currentColor={iconColor}/>
            </div>
            <div className='w-8 h-8 rounded-lg overflow-hidden'>
              <ReactIcon currentColor={iconColor}/>
            </div>
            <div className='w-8 h-8 rounded-lg overflow-hidden'>
              <NextIcon currentColor={iconColor}/>
            </div>
            <div className='w-8 h-8 rounded-lg overflow-hidden'>
              <TailwindIcon currentColor={iconColor}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}