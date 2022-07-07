import Image from 'next/image';
import JsIcon from '../components/jsicon.js'
import ReactIcon from '../components/reacticon.js'
import NextIcon from '../components/nexticon'
import TailwindIcon from '../components/tailwind.js' 
import { useTheme } from 'next-themes'
import {MoonIcon, SunIcon} from '@heroicons/react/solid'


export default function Home() {
  const { systemTheme, theme, setTheme } = useTheme()
  const iconColor = theme == 'dark' ? '#e3e4e6' : '#f000ff'

  const renderThemeChanger = () => {
    const currentTheme = theme == 'system' ? 'systemTheme' : theme

    if (currentTheme == 'dark') {
      return (
        <SunIcon className="w-7 h-7" role='button' onClick={()=> setTheme('light')} />)
    } else {
      return (
        <MoonIcon className="w-7 h-7" role='button' onClick={()=> setTheme('dark')} />)
      }
  }

  return (
    <div className="flex flex-col items-center gap-12 pb-44 pt-6 md:flex-row-reverse md:gap-6 md:pt-20">
      <div className="group relative flex h-40 w-40 items-center justify-center md:h-52 md:w-52 md:flex-1">
        <div className='overflow-hidden rounded drop-shadow-[10px_10px_0px_rgba(240,0,255,1)]'>
          <Image
            src="/rossi.jpg"
            alt="Rossicodes"
            width={250}
            height={250}
            className="rounded"
          />
          </div>
      </div>

      <div className="mx-10 md:mx-2 flex flex-[2] flex-col items-center gap-4 md:items-start">
        <h1 className="text-4xl font-extrabold">
          Hi, I&#39;m Ross
        </h1>
        <p className="text-center font-bold leading-7 md:text-left">A self taught coder from York, UK.</p>
        <p className="text-center font-bold leading-7 md:text-left">I use <span className="underline underline-offset-4 decoration-2 decoration-pink">React</span>, <span className="underline decoration-2 underline-offset-4 decoration-pink">Next.js</span> and <span className="underline underline-offset-4 decoration-2 decoration-pink">Tailwind CSS</span> to build products that help you reach your potential.</p>
        <div className="flex flex-col items-center gap-4 md:items-start">
          <p className="text-center font-bold leading-7 md:text-left">Toolbox:</p>
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