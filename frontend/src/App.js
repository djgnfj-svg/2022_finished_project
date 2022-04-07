import logo from './logo.svg';
import './App.css';
import Topbar from './templates/TopBar.js'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';


function App() {
  
  return (
    <div className="App">
        <Topbar />
        
      
    </div>
  );
}

export default App;
