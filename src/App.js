import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar/Navbar';
import Messages from './pages/Messages/Messages';
import Profile from './pages/Profile/Profile';
import {Route} from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Header/>
      <div className='main-wrapper'>
         <div className='container main-container'>
            <Navbar/>
            <Route path="/profile">
               <Profile/>
            </Route>
            <Route path="/messages">
               <Messages/>
            </Route>
         </div>
      </div>
    </div>
  );
}

export default App;
