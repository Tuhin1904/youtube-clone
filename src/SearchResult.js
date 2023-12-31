import React,{useEffect,useState} from 'react'
import axios from 'axios'
import "./styles/SearchResult.css"
import {FaFilter} from 'react-icons/fa'
import {Link} from 'react-router-dom'

function SearchResult({searchQ, arrayVar,onVideoSelect}) {
  const[ress,setRes]=useState([])
  console.log(searchQ)
  const API_key="AIzaSyC5_FfKdlUpBVYKjqzpnAlUKSDPKloF6s8";

  const handleVideoClick =(id)=>{
    onVideoSelect(id)
  }

  useEffect(()=>{

  if(searchQ.trim()===''){
    return;
  }
  else{
    axios.get('https://www.googleapis.com/youtube/v3/search',
    {
      params:{
      key: API_key,
      part:'snippet',
      chart:'mostPopular',
      maxResults:15,
      q:searchQ,
      }
    })
  .then((res)=>{
      console.log("Search API response is,",res.data.items)
      setRes(res.data.items)
    })
  .catch((err)=> console.log("Tuhin your error is:",err))
  }
  },[arrayVar,searchQ]);

  return (
    <div className="sResult">
       
       <div className="filter">
          <FaFilter size={22}/>
          <h3>FILTER</h3> 
       </div>
       <hr />
       <ul>
        { ress.map((each,i)=>(
          <Link key={i} to='/playvideo' style={{ textDecoration: 'none', color: 'black' }} onClick={()=>handleVideoClick(each.id.videoId)}><li key={i} style={{display:"flex",marginBottom:'0.8rem'}}>
          
          <img src={each.snippet.thumbnails.medium.url} alt="" />
          <div style={{marginLeft:"1rem"}}>
          <h5>{each.snippet.title}</h5>
          <br />
          <h4>{each.snippet.channelTitle}</h4>
          <p>{each.snippet.description}</p>
          <p>Date:{each.snippet.publishedAt}</p>

          </div>
          </li></Link>
        ))}
       </ul>

    </div>
  )
  }

export default SearchResult