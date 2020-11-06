import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';

const withAuthRedirect = (Component) => {
   return function RedirectComponent(props) {
      const isAuth = useSelector((state) => state.auth.isAuth);

      if (!isAuth) return <Redirect to="/login" />;

      return <Component {...props} />;
   };
};

export default withAuthRedirect;
