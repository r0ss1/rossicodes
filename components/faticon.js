import { GiAvocado } from 'react-icons/gi'
import React from 'react'


const FatIcon = (props) => {


    return (
        <GiAvocado size={28} className="mr-0 " fill={props.theme == 'dark' ? '#0e1111' : '#e3e4e6'}/>
    )
}

FatIcon.displayName = "FatIcon"
export default FatIcon