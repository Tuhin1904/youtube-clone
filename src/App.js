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
  const[vidId, setVidId]=useState('')

  const handleVideoSelect = (id)=>{
    setVidId(id)
  }

  const handleSearch= (query) =>{
      setSearchQ(query)
  }
  const changeVal = ()=>{
      const newC = c+1;
      // console.log(newC)
      setC(newC)
  }
  console.log("video id of video you clicked is:",vidId)
  return (
    <div className="App">
    <Header onSearch={handleSearch} onSubmit={changeVal}/>
      <Routes>
         <Route path="/" element={
         <>
         <div className="app_body">
          <SideBar/>
          <RecommendedVideos onVidSelect={handleVideoSelect}/>
         </div>
         </>
         }
         />
         <Route path="/search/:searchTerm" element={
         <div className="app_body">
          <SideBar/>
          <SearchResult searchQ={searchQ} arrayVar={c} onVideoSelect={handleVideoSelect}/>
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
            <Playvideo videoId={vidId}/>
          </div>
         }/>
          
      </Routes>
    </div>
  );
}

export default App;