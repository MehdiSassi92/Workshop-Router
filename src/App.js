import './App.css';
import { Home } from './components/Home';
import { Routes, Route } from "react-router-dom";
import MovieDescription from './components/MovieDescription';


function App() {
  
  return (
    <div className='App'>  
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/movies/:id" element={<MovieDescription />} />
      </Routes>  
    </div>
  );
}

export default App;
