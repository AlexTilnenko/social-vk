import React, { useEffect } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Messages from './components/Messages/Messages';
import Users from './components/Users/Users';
import Login from './components/Login/Login';
import { initialize } from './actions/initialisation';
import Loader from './components/Loader/Loader';

function App() {
   const dispatch = useDispatch();
   const initialized = useSelector((state) => state.initialisation.initialized);
   useEffect(() => {
      dispatch(initialize());
   }, []); // eslint-disable-line react-hooks/exhaustive-deps

   if (!initialized) {
      return (
         <div className="App">
            <div className="main-wrapper">
               <Loader />
            </div>
         </div>
      );
   }

   return (
      <div className="App">
         <div className="main-wrapper">
            <Header />

            <div className="container main-container">
               <Navbar />
               <Route path="/profile/:userId?">
                  <Profile />
               </Route>
               <Route path="/messanger" exact>
                  <Messages />
               </Route>
               <Route path="/users" exact>
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

export default compose(withRouter)(App);
