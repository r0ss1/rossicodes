import { TbLayoutDashboard } from 'react-icons/tb'
import React from 'react'
import Link from 'next/link'


const DashboardIcon = (props) => {
    const LinkComponent = React.forwardRef(function dashboardIcon({ onClick, href }, ref) {
        return (
        <a href={href} onClick={onClick} ref={ref} className="flex">
        <TbLayoutDashboard stroke={props.iconColor} className="my-auto"/> <p className='px-2 hidden md:block'>Dashboard</p>
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