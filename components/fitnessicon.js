import { IoFitness } from 'react-icons/io5'
import React from 'react'


const FitnessIcon = (props) => {


    return (
  
        <IoFitness size={24} stroke={props.iconColor} className="my-auto mr-2"/>

    )
}

FitnessIcon.displayName = "FitnessIcon"
export default FitnessIcon