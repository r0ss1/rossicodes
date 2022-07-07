import { IoMdFitness } from 'react-icons/io'
import React from 'react'


const GymIcon = (props) => {


    return (
  
        <IoMdFitness size={28} fill={props.theme == 'dark' ? '#0e1111' : '#e3e4e6'} className="mr-0"/>

    )
}

GymIcon.displayName = "GymIcon"
export default GymIcon