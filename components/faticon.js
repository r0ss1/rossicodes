import { GiAvocado } from 'react-icons/gi'
import React from 'react'


const FatIcon = (props) => {


    return (
  
        <GiAvocado size={28} stroke={props.iconColor} className="mr-0"/>

    )
}

FatIcon.displayName = "FatIcon"
export default FatIcon