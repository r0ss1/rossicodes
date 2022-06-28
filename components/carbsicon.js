import { GiDonut } from 'react-icons/gi'
import React from 'react'


const CarbsIcon = (props) => {


    return (
  
        <GiDonut size={28} stroke={props.iconColor} className="mr-0"/>

    )
}

CarbsIcon.displayName = "CarbsIcon"
export default CarbsIcon