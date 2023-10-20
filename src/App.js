import './App.css';
import Header from './Header';
import SideBar from './SideBar';
import RecommendedVideos from './RecommendedVideos';
import {Routes,Route} from 'react-router-dom'
import SearchResult from './SearchResult';
import Playvideo from './Playvideo';
import {useState} from 'react'

function App() {
  const[searchQ,setSearchQ ]= useState('')
  const[c, setC]= useState(0)
  const handleSearch= (query) =>{
      setSearchQ(query)
  }
  const changeVal = ()=>{
      const newC = c+1;
      // console.log(newC)
      setC(newC)
  }

  return (
    <div className="App">
    <Header onSearch={handleSearch} onSubmit={changeVal}/>
      <Routes>
         <Route path="/" element={
         <>
         <div className="app_body">
          <SideBar/>
          <RecommendedVideos/>
         </div>
         </>
         }
         />
         <Route path="/search/:searchTerm" element={
         <div className="app_body">
          <SideBar/>
          <SearchResult searchQ={searchQ} arrayVar={c}/>
         </div>
         }/>
         <Route path="/search/" element={
         <div className="app_body">
          <SideBar/>
          <SearchResult searchQ={searchQ}/>
         </div>
         }/>
         <Route path="/playvideo" element={
          <div className="app_body">
            <SideBar/>
            <Playvideo/>
          </div>
         }/>
          
      </Routes>
    </div>
  );
}

export default App;