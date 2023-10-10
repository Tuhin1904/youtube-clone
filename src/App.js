import './App.css';
import Header from './Header';
import SideBar from './SideBar';
import RecommendedVideos from './RecommendedVideos';

function App() {
  return (
    <div className="App">
        <Header/>
        <div className="app_body">
          <SideBar/>
          <RecommendedVideos/>
        </div>
    </div>
  );
}

export default App;
