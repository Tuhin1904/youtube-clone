import React from 'react'
import "./styles/Eachvideo.css"

function Eachvideo({thumbnail, title, image, views,chanelname, time}) {
  return (
    <div className="eachVid">
        <img src={thumbnail.url} alt="" />
        <div className="video_info">
            <h4>{chanelname}</h4>
            <img src="" alt="" className="thumbnailImg" />
        </div>
        <div className="videoText">
            <h5>{title}</h5>
            <p>{chanelname}</p>
            <p>{views}.{time}</p>
        </div>

    </div>
  )
}

export default Eachvideo