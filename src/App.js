import React from 'react';
import './App.scss';
import Header from './components/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='main-wrapper'>
         <div className='container main-container'>
            <Navbar/>
            <Profile/>
         </div>
      </div>
    </div>
  );
}

export default App;
