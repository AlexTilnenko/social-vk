import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './pages/Profile/Profile';
import Messages from './pages/Messages/Messages';
import Users from './pages/Users/Users';
import {Route} from "react-router-dom";

function App() {

  return (
    <div className="App">
      <div className='main-wrapper'>
         <Header/>
         <div className='container main-container'>
            <Navbar/>
            <Route path="/profile/:userId?">
               <Profile/>
            </Route>
            <Route path="/messanger">
               <Messages/>
            </Route>
            <Route path="/users">
               <Users/>
            </Route>
         </div>
      </div>
    </div>
  );
}

export default App;
