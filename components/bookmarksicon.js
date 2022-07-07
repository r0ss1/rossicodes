import { TbBookmarks } from 'react-icons/tb'
import React from 'react'
import Link from 'next/link'

const BookmarkIcon = (props) => {
    const LinkComponent = React.forwardRef(function bookmarkIcon({ onClick, href }, ref) {
        return (
        <a href={href} onClick={onClick} ref={ref} className="flex sm:px-2 lg:px-0">
        <TbBookmarks fill={props.iconColor} className="mr-2 md:mr-0 my-auto"/> <p className='hover:text-pink px-2 hidden md:block'>Bookmarks</p>
        </a>
    )
    })
    return (
        <Link href='/bookmarks' passHref>
        <LinkComponent />
        </Link>
    )
}

BookmarkIcon.displayName = "BookmarkIcon"
export default BookmarkIcon