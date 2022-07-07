import { IoFootstepsSharp } from 'react-icons/io5'
import React from 'react'


const FootstepsIcon = (props) => {


    return (
  
        <IoFootstepsSharp size={28} fill={props.theme == 'dark' ? '#0e1111' : '#e3e4e6'} className="mr-0"/>

    )
}

FootstepsIcon.displayName = "FootstepsIcon"
export default FootstepsIcon