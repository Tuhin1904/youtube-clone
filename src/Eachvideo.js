import React from 'react'
import "./styles/Eachvideo.css"

function Eachvideo({thumbnail, title, image, views,chanelname, time}) {
  return (
    <div className="eachVid">
       <img src={thumbnail.url} alt="" />
        <div className="video_info">
            <h4>{chanelname}</h4>
          
        </div>
        <div className="videoText">
            <h5>{title}</h5>
            <p>{views}{time}</p>
        </div>

    </div>
  )
}

export default Eachvideo