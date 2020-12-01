import React, { useEffect } from 'react';
import { Redirect, Route, withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { compose } from 'redux';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Loader from './components/common/Loader/Loader';
import withSuspense from './components/hoc/withSuspense';
import { initialize } from './actions/app';
import { selectAppInitialized } from './selectors/appSelectors';
const Messages = React.lazy(() => import('./components/Messages/Messages'));
const Users = React.lazy(() => import('./components/Users/Users'));
const Login = React.lazy(() => import('./components/Login/Login'));
const Friends = React.lazy(() => import('./components/Friends/Friends'));
const Settings = React.lazy(() => import('./components/Settings/Settings'));

function App() {
   const dispatch = useDispatch();
   const initialized = useSelector(selectAppInitialized);
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
               <Route path="/friends" exact render={withSuspense(Friends)} />
               <Route path="/settings" exact render={withSuspense(Settings)} />
            </div>
         </div>
      </div>
   );
}

export default compose(withRouter)(App);
