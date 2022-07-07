import { FaMapMarkedAlt } from 'react-icons/fa'
import React from 'react'


const MapIcon = (props) => {


    return (
  
        <FaMapMarkedAlt size={28} fill={props.theme == 'dark' ? '#0e1111' : '#e3e4e6'} className="mr-0"/>

    )
}

MapIcon.displayName = "MapIcon"
export default MapIcon