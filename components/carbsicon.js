import { GiDonut } from 'react-icons/gi'
import React from 'react'


const CarbsIcon = (props) => {


    return (
  
        <GiDonut size={28} className="mr-0" fill={props.iconColor}/>

    )
}

CarbsIcon.displayName = "CarbsIcon"
export default CarbsIcon