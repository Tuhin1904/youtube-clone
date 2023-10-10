import React from 'react'
import "./styles/RecommendedVideo.css"
import Eachvideo from './Eachvideo';

function RecommendedVideos() {
  return (
    <div className="recVideos">
        <h3>Recommended</h3>
        <div className="eachVideo">
            <Eachvideo title="First vid" views="1M" time="2days ago"/>
            <Eachvideo title="First vid" views="1M" time="2days ago"/>
            <Eachvideo title="First vid" views="1M" time="2days ago"/>
            <Eachvideo title="First vid" views="1M" time="2days ago"/>
            <Eachvideo title="First vid" views="1M" time="2days ago"/>
            <Eachvideo title="First vid" views="1M" time="2days ago"/>
            <Eachvideo title="First vid" views="1M" time="2days ago"/>
            <Eachvideo title="First vid" views="1M" time="2days ago"/>
        </div>
    </div>
  )
}

export default RecommendedVideos