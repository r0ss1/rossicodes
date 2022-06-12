import Link from 'next/link'
import Image from 'next/image';
import { TbLayoutDashboard, TbBookmarks } from 'react-icons/tb';
import { FaHardHat, FaLaptopCode } from 'react-icons/fa';

function navbar() {

  const iconColor = '#57637c'

  return (
    <div className="w-11/12 md:gap-4 my-6 mx-auto px-6 sm:px-12 py-6 flex flex-col md:justify-start items-center sm:flex-row sm:justify-center">
      <div className="flex-shrink-0 border border-4 border-grey-300 hover:border-purple-50 overflow-hidden rounded-full flex items-center">
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
            <Link href='/dashboard'>
            <a className="flex items-center p-2 rounded-lg hover:bg-grey-50">
            <TbLayoutDashboard stroke={iconColor}/> <p className='px-2 hidden md:block'>Dashboard</p>
            </a>
            </Link>
            <Link href='/projects'>
            <a className="flex items-center p-2 rounded-lg hover:bg-grey-50">
            <FaHardHat fill={iconColor}/> <p className='px-2 hidden md:block'>Projects</p>
            </a>
            </Link>
            <Link href='/bookmarks'>
            <a className="flex items-center p-2 rounded-lg hover:bg-grey-50">
            <TbBookmarks stroke={iconColor}/> <p className='px-2 hidden md:block'>Bookmarks</p>
            </a>
            </Link>
            <Link href='/code'>
            <a className="flex items-center p-2 rounded-lg hover:bg-grey-50">
            <FaLaptopCode fill={iconColor}/> <p className='px-2 hidden md:block'>Code</p>
            </a>
            </Link>
        </div>
    </div>
  )
}

export default navbar