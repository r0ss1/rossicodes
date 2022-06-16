import { FaGithub } from 'react-icons/fa'
import React from 'react'


const GithubIcon = (props) => {


    return (
  
        <FaGithub stroke={props.iconColor} className="my-auto mr-2"/>

    )
}

GithubIcon.displayName = "GithubIcon"
export default GithubIcon