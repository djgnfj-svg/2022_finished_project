import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import MainPage from './pages/MainPage/MainPage';

function App() {
  return (
    <div className="App">
      <Router >
        <Routes >
          <Route path='/' element={<MainPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
