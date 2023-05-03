import React from 'react';
import './App.css';
import Banner from './components/Banner/Banner';
import NavBar from './components/NavBar/NavBar';
import RowPost from './components/RowPost/RowPost';
import { actionMovies,originals } from './url';

function App() {
  return (
    <div className="App">
     <NavBar/ >
     <Banner/>
     <RowPost url={originals} title='Netflix Originals'/>  
     <RowPost url={actionMovies}   title='Action' isSmall/>  
    </div>
  );
}

export default App;
