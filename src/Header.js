import React,{useState} from 'react'
import {FaBars,FaSearch,FaVideo,FaGripHorizontal,FaRegBell,FaSmile} from 'react-icons/fa'
import youtube from './media/youtubelogo2.png'
import "./styles/Header.css"
import {Link} from 'react-router-dom'

function Header() {
  const [inputSearch,setInputSearch] = useState("")
  return (
    <div className="header">
        <div className="headerLeft">
            <FaBars size={22}/>
            <Link to="/">
            <img className="youtubeLogo" src={youtube} alt="" />
            </Link>
        </div>  
        <div className="headerMiddle">
        <input value={inputSearch} 
            type="text" 
            placeholder="Search"
            onChange={(e)=>setInputSearch(e.target.value)} 
        />
        <Link to={`/search/${inputSearch}`}>  
            <FaSearch size={25}/>
        </Link>            
            
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