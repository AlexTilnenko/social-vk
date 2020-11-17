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
import { initialize } from './redux/actions/initialisation';
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
            <Header dispatch={dispatch} />

            <div className="container main-container">
               <Navbar />
               <Route path="/profile/:userId?">
                  <Profile dispatch={dispatch} />
               </Route>
               <Route path="/messanger" exact>
                  <Messages dispatch={dispatch} />
               </Route>
               <Route path="/users" exact>
                  <Users dispatch={dispatch} />
               </Route>
               <Route path="/login" exact>
                  <Login dispatch={dispatch} />
               </Route>
            </div>
         </div>
      </div>
   );
}

export default compose(withRouter)(App);
