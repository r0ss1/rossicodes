import { FaHardHat } from 'react-icons/fa';
import Link from 'next/link'
import React from 'react'

const ProjectIcon = (props) => {
    const LinkComponent = React.forwardRef(function projectIcon({ onClick, href }, ref) {
        return (
        <a href={href} onClick={onClick} ref={ref} className="flex sm:px-2 lg:px-0">
        <FaHardHat fill={props.iconColor} className="my-auto"/> <p className='hover:text-pink px-2 hidden md:block'>Projects</p>
        </a>
    )
    })
    return (
        <Link href='/projects' passHref>
        <LinkComponent />
        </Link>
    )
}

ProjectIcon.displayName = "ProjectIcon"
export default ProjectIcon