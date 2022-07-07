import Link from 'next/link'
import Image from 'next/image';
import DashboardIcon from './dashboardicon'
import ProjectIcon from './projectsicon';
import BookmarkIcon from './bookmarksicon';
import CodeIcon from './codeicon';
import { useTheme } from 'next-themes'
import { MoonIcon, SunIcon } from '@heroicons/react/solid'
import {useState, useEffect} from 'react'


function navbar() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const iconColor = '#232b2b'

  useEffect(() => {
    setMounted(true)
  },[])

  const renderThemeChanger = () => {
    if (!mounted) return null
    
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
    <div className="w-11/12 md:gap-4 my-6 px-6 sm:px-12 py-6 flex sm:flex-col md:flex-row items-center">
      <div className="flex-shrink-0 border border-4 border-grey-300 hover:border-pink overflow-hidden rounded-full flex items-center">
      <Link href='/'>
            <Image
              className="lg:hidden"
              src='/rossi.jpg' 
              alt="Rossi"
              width={50}
              height={50}
              objectFit="cover"
          />
      </Link>
        </div>
        <div className="flex text-center md:text-lg font-bold mt-4 sm:mt-0">
            <DashboardIcon iconColor={iconColor} />
            <ProjectIcon iconColor={iconColor} />
            <BookmarkIcon iconColor={iconColor} />
            <CodeIcon iconColor={iconColor} />
      </div>
      <div className='flex ml-auto md:text-lg font-bold mt-4 sm:mt-0'>{renderThemeChanger()}</div>
    </div>
  )
}

export default navbar