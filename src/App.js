
import './App.css';
import Home from './pages/Home';
import Header  from './components/Header';
import { useState } from 'react';

function App() {

  const [isNavOpen, setIsNavOpen] =useState(false);

  const isNavOpenHandeler = ()=>{
    setIsNavOpen(!isNavOpen);
  }

  return (
    <div className='app'>
      <Header isNavOpenHandeler ={isNavOpenHandeler} isNavOpen={isNavOpen} />
      <div className='main-container' id='maincontainer'>
        <Home />
      </div>
    </div>
  );
}

export default App;
