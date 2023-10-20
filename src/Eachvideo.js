import React from 'react'
import "./styles/Eachvideo.css"
import { Link } from 'react-router-dom';

function Eachvideo({thumbnail, title, image, views,chanelname, time}) {
  return (
    <div className="eachVid">
        <Link to='/playvideo'><img src={thumbnail.url} alt="" /></Link>
        <div className="video_info">
            <h4>{chanelname}</h4>
            {/* <img src="" alt="" className="thumbnailImg" /> */}
        </div>
        <div className="videoText">
            <h5>{title}</h5>
            <p>{views}{time}</p>
        </div>

    </div>
  )
}

export default Eachvideo