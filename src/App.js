import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Messages from './components/Messages/Messages';
import Users from './components/Users/Users';
import { Route } from 'react-router-dom';
import Login from './components/Login/Login';

function App() {
   return (
      <div className="App">
         <div className="main-wrapper">
            <Header />

            <div className="container main-container">
               <Navbar />
               <Route path="/profile/:userId?">
                  <Profile />
               </Route>
               <Route path="/messanger">
                  <Messages />
               </Route>
               <Route path="/users">
                  <Users />
               </Route>
               <Route path="/login" exact>
                  <Login />
               </Route>
            </div>
         </div>
      </div>
   );
}

export default App;
