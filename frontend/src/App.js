import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes,Route,BrowserRouter} from 'react-router-dom';
import Home from './components/Home';
import MapComponent from './components/map';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/map'element={<MapComponent/>}/>
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
