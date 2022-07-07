import { GiDonut } from 'react-icons/gi'
import React from 'react'


const CarbsIcon = (props) => {


    return (
  
        <GiDonut size={28} className="mr-0" fill={props.theme == 'dark' ? '#0e1111' : '#e3e4e6'}/>

    )
}

CarbsIcon.displayName = "CarbsIcon"
export default CarbsIcon