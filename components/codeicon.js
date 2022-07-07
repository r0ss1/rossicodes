import { FaLaptopCode } from 'react-icons/fa';
import React from 'react'
import Link from 'next/link'

const CodeIcon = (props) => {
    const LinkComponent = React.forwardRef(function codeIcon({ onClick, href }, ref) {
        return (
        <a href={href} onClick={onClick} ref={ref} className="flex sm:px-2 lg:px-0">
        <FaLaptopCode stroke={props.iconColor} className="mr-2 md:mr-0 my-auto"/> <p className='hover:text-pink px-2 hidden md:block'>Code</p>
        </a>
    )
    })
    return (
        <Link href='/code' passHref>
        <LinkComponent />
        </Link>
    )
}

CodeIcon.displayName = "CodeIcon"
export default CodeIcon