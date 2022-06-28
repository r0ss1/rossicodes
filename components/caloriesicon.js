import { GiMeat } from 'react-icons/gi'
import React from 'react'


const CaloriesIcon = (props) => {


    return (
  
        <GiMeat size={24} stroke={props.iconColor} className="my-auto mr-2"/>

    )
}

CaloriesIcon.displayName = "CaloriesIcon"
export default CaloriesIcon