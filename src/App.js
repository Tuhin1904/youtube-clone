import './App.css';
import Header from './Header';
import SideBar from './SideBar';
import RecommendedVideos from './RecommendedVideos';
import {Routes,Route} from 'react-router-dom'
import SearchResult from './SearchResult';

function App() {
  return (
    <div className="App">
    <Header/>
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
          <SearchResult/>
         </div>
         }/>
          
      </Routes>
    </div>
  );
}

export default App;