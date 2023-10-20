import React,{useEffect,useState} from 'react'
import axios from 'axios'
import "./styles/SearchResult.css"
import {FaFilter} from 'react-icons/fa'

function SearchResult({searchQ, arrayVar}) {
  const[res,setRes]=useState()
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
      console.log(res)
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
        
       </ul>

    </div>
  )
  }

export default SearchResult