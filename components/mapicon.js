import { FaMapMarkedAlt } from 'react-icons/fa'
import React from 'react'


const MapIcon = (props) => {


    return (
  
        <FaMapMarkedAlt size={28} fill={props.iconColor} className="mr-0"/>

    )
}

MapIcon.displayName = "MapIcon"
export default MapIcon