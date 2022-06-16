import Link from 'next/link'
import Image from 'next/image';
import DashboardIcon from './dashboardicon'
import ProjectIcon from './projectsicon';
import BookmarkIcon from './bookmarksicon';
import CodeIcon from './codeicon';


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
            <DashboardIcon iconColor={iconColor} />
            <ProjectIcon iconColor={iconColor} />
            <BookmarkIcon iconColor={iconColor} />
            <CodeIcon iconColor={iconColor} />
        </div>
    </div>
  )
}

export default navbar