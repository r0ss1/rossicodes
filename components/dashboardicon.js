import { TbLayoutDashboard } from 'react-icons/tb'
import React from 'react'
import Link from 'next/link'


const DashboardIcon = (props) => {
    const LinkComponent = React.forwardRef(function dashboardIcon({ onClick, href }, ref) {
        return (
        <a href={href} onClick={onClick} ref={ref} className="flex">
        <TbLayoutDashboard fill={props.iconColor} className="mr-2 md:mr-0 my-auto"/> <p className='hover:text-pink px-2 hidden md:block'>Dashboard</p>
        </a>
    )   
    })
    return (
        <Link href='/dashboard' passHref>
            <LinkComponent />
        </Link>
    )
}

DashboardIcon.displayName = "DashboardIcon"
export default DashboardIcon