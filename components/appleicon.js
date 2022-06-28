import { CgAppleWatch } from 'react-icons/cg'
import React from 'react'


const AppleIcon = (props) => {


    return (
  
        <CgAppleWatch size={28} stroke={props.iconColor} className="my-auto mr-2"/>

    )
}

AppleIcon.displayName = "AppleWatchIcon"
export default AppleIcon