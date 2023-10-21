import React,{useEffect,useState} from 'react'
import axios from 'axios'
import "./styles/SearchResult.css"
import {FaFilter} from 'react-icons/fa'

function SearchResult({searchQ, arrayVar}) {
  const[ress,setRes]=useState([])
  console.log(searchQ)
  const API_key="AIzaSyC5_FfKdlUpBVYKjqzpnAlUKSDPKloF6s8";

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
      maxResults:10,
      q:searchQ,
      }
    })
  .then((res)=>{
      console.log("Search API response is,",res.data.items)
      setRes(res.data.items)
    })
  .catch((err)=> console.log("Tuhin your error is:",err))
  }
  },[arrayVar]);

  return (
    <div className="sResult">
       
       <div className="filter">
          <FaFilter size={22}/>
          <h3>FILTER</h3> 
       </div>
       <hr />
       <ul>
        { ress.map((each,i)=>(
          <li key={i} style={{display:"flex",marginBottom:'0.8rem'}}>
          
          <img src={each.snippet.thumbnails.medium.url} alt="" />
          <div style={{marginLeft:"1rem"}}>
          <h5>{each.snippet.title}</h5>
          <br />
          <h4>{each.snippet.channelTitle}</h4>
          <p>{each.snippet.description}</p>
          <p>Date:{each.snippet.publishedAt}</p>

          </div>
          </li>
        ))}
       </ul>

    </div>
  )
  }

export default SearchResult