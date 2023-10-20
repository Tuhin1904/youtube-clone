import React,{useEffect,useState} from 'react'
import "./styles/RecommendedVideo.css"
import Eachvideo from './Eachvideo';
import axios from 'axios';


function RecommendedVideos() {
  const API_key="AIzaSyC5_FfKdlUpBVYKjqzpnAlUKSDPKloF6s8"
  const youtubeurl="https://www.googleapis.com/youtube/v3/videos?"

  const[apiData,setApiData]=useState([])
 
  useEffect(()=>{
   
    axios.get(youtubeurl+ new URLSearchParams({
      key: API_key,
      part:'snippet',
      chart:'mostPopular',
      maxResults:20,
      regionCode:"IN"
    }))
    .then((res)=>{
      // console.log(res.data.items)
      setApiData(res.data.items)})
    .catch(err=> console.log('error is',err))
  },[])
  return (
    <div className="recVideos">
        <h3>Recommended</h3>
        <br />
        <div className="eachVideo">
       { apiData.map((item,i)=>{

        return  <Eachvideo key={i} chanelname={item.snippet.channelTitle} title={item.snippet.title} thumbnail={item.snippet.thumbnails.medium} time={item.snippet.publishedAt}/>
          })}
        </div>
    </div>
  )
}

export default RecommendedVideos