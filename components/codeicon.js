import { FaLaptopCode } from 'react-icons/fa';
import React from 'react'
import Link from 'next/link'

const CodeIcon = (props) => {
    const LinkComponent = React.forwardRef(function codeIcon({ onClick, href }, ref) {
        return (
        <a href={href} onClick={onClick} ref={ref} className="flex sm:px-2 lg:px-0">
        <FaLaptopCode fill={props.iconColor} className="my-auto"/> <p className='px-2 hidden md:block'>Code</p>
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