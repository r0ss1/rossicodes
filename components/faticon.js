import { GiAvocado } from 'react-icons/gi'
import React from 'react'


const FatIcon = (props) => {


    return (
        <GiAvocado size={28} className="mr-0 " fill={props.iconColor}/>
    )
}

FatIcon.displayName = "FatIcon"
export default FatIcon