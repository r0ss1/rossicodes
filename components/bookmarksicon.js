import { TbBookmarks } from 'react-icons/tb'
import React from 'react'
import Link from 'next/link'

const BookmarkIcon = (props) => {
    const LinkComponent = React.forwardRef(({ onClick, href }, ref) => {
        return (
        <a href={href} onClick={onClick} ref={ref} className="flex sm:px-2 lg:px-0">
        <TbBookmarks stroke={props.iconColor} className="my-auto"/> <p className='px-2 hidden md:block'>Bookmarks</p>
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