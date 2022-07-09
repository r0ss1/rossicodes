import { IoMdFitness } from 'react-icons/io'
import React from 'react'


const GymIcon = (props) => {


    return (
  
        <IoMdFitness size={28} fill={props.iconColor} className="mr-0"/>

    )
}

GymIcon.displayName = "GymIcon"
export default GymIcon