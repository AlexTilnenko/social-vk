import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, HashRouter } from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';

import './scss/main.scss';

ReactDOM.render(
   <React.StrictMode>
      <Provider store={store}>
         <Router basename={process.env.PUBLIC_URL}>
            <HashRouter basename="/">
               <App />
            </HashRouter>
         </Router>
      </Provider>
   </React.StrictMode>,
   document.getElementById('root')
);
