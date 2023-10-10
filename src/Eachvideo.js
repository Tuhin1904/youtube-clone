import React from 'react'
import "./styles/Eachvideo.css"

function Eachvideo({thumbnail, title, image, views,chanelname, time}) {
  return (
    <div className="eachVid">
        <img src="" alt="" />
        <div className="video_info">
            <img src="" alt="" className="thumbnailImg" />
        </div>
        <div className="videoText">
            <h4>{title}</h4>
            <p>{chanelname}</p>
            <p>{views}.{time}</p>
        </div>

    </div>
  )
}

export default Eachvideo