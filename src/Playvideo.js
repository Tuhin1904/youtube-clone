import React from 'react'
import './styles/playvideo.css'

function Playvideo({videoId}) {
  return (
    <div className='playVideo'>
    
    <iframe title="play" width="700px" height="450px" src={`https://www.youtube.com/embed/${videoId}`} frameborder="0"></iframe>
    </div>
  )
}

export default Playvideo