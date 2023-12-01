import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Home from './Home';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <div className='content'>
      <Home/>
      <Footer/>
      </div>
    </div>
  );
}

export default App;
