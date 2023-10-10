import React from 'react'
import {FaBars,FaSearch,FaVideo,FaGripHorizontal,FaRegBell,FaSmile} from 'react-icons/fa'
import youtube from './media/youtubelogo2.png'
import "./styles/Header.css"

function Header() {
  return (
    <div className="header">
        <div className="headerLeft">
            <FaBars size={20}/>
            <img className="youtubeLogo" src={youtube} alt="" />
        </div>  
        <div className="headerMiddle">  
            <input type="text" />
            <FaSearch size={20}/>
        </div>    
        <div className="headerRight">
            <FaVideo className="rightIcons" size={20}/>
            <FaGripHorizontal className="rightIcons" size={20}/>
            <FaRegBell className="rightIcons" size={20}/>
            <FaSmile className="rightIcons" size={30}/>
        </div>
    </div>
  )
}

export default Header