import React, { useEffect } from 'react';
import { Redirect, Route, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { initialize } from './actions/initialisation';
import Loader from './components/common/Loader/Loader';
import withSuspense from './components/hoc/withSuspense';
const Messages = React.lazy(() => import('./components/Messages/Messages'));
const Users = React.lazy(() => import('./components/Users/Users'));
const Login = React.lazy(() => import('./components/Login/Login'));

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
               <Route path="/" exact>
                  <Redirect to="/profile" />
               </Route>
               <Route path="/profile/:userId?" render={Profile} />
               <Route path="/messanger" exact render={withSuspense(Messages)} />
               <Route path="/users" exact render={withSuspense(Users)} />
               <Route path="/login" exact render={withSuspense(Login)} />
            </div>
         </div>
      </div>
   );
}

export default compose(withRouter)(App);
