import { GiSteak } from 'react-icons/gi'
import React from 'react'


const ProteinIcon = (props) => {


    return (
  
        <GiSteak size={28} fill={props.theme == 'dark' ? '#0e1111' : '#e3e4e6'} className="mr-0"/>
    )
}

ProteinIcon.displayName = "ProteinIcon"
export default ProteinIcon