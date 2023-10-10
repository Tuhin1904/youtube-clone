import React from 'react'
import "./styles/SearchResult.css"
import {FaFilter} from 'react-icons/fa'

function SearchResult() {
  return (
    <div className="sResult">
       <div className="filter">
          <FaFilter size={22}/>
          <h3>FILTER</h3>
       </div>
       <hr />
    </div>
  )
}

export default SearchResult