import React from 'react'
import "./styles/SideBar.css"
import SideBarRows from './SideBarRows';
import {FaHome,FaHistory,FaThumbsUp,FaClock,FaChevronDown} from 'react-icons/fa'
import {FaRectangleList} from 'react-icons/fa6'

function SideBar() {
  return (
    <div className="sideBar">
        
        <SideBarRows selected Icon={FaHome} title="Home"/>
        <SideBarRows Icon={FaRectangleList} title="Subscriptions"/>
        <hr />
        <SideBarRows Icon={FaHistory} title="History"/>
        <SideBarRows Icon={FaThumbsUp} title="Liked"/>
        <SideBarRows Icon={FaClock} title="Watch Later"/>
        <SideBarRows Icon={FaChevronDown} title="Show more"/>
        <hr />
    </div>
  )
}

export default SideBar