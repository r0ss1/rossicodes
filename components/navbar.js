import Link from 'next/link'
import Image from 'next/image';
import DashboardIcon from './dashboardicon'
import ProjectIcon from './projectsicon';
import BookmarkIcon from './bookmarksicon';
import CodeIcon from './codeicon';
import { useTheme } from 'next-themes'
import { MoonIcon, SunIcon } from '@heroicons/react/solid'
import { useState, useEffect } from 'react'
import { FaHome } from 'react-icons/fa'


function Navbar() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const iconColor = 'white'

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
    <div className="w-11/12 md:gap-4 my-6 px-6 sm:px-12 py-6 flex flex-col md:flex-row items-center">
      <div className="invisible md:visible flex-shrink-0 border-gradient-br-green-blue-purple gradient-border-3 hover:border-pink overflow-hidden rounded-full flex items-center">
      <Link href='/'>
          <Image
              src='/rossi.jpg' 
              alt="Rossi"
              width={50}
              height={50}
              objectFit="cover"
          />
      </Link>
        </div>
      <div className="flex flex-row text-center md:text-lg font-bold mt-4 sm:mt-0">
        <div className='visible md:invisible mr-2'> 
        <Link href='/'>
            <FaHome />
          </Link>
          </div>   
            <DashboardIcon iconColor={iconColor} />
            <ProjectIcon iconColor={iconColor} />
            <BookmarkIcon iconColor={iconColor} />
            <CodeIcon iconColor={iconColor} />
      </div>
      <div className='md:ml-auto sm:mt-0 mt-4'>{renderThemeChanger()}</div>
    </div>
  )
}

export default Navbar