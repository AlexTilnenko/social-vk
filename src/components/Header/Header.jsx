import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../actions/auth';
import { useDispatch } from 'react-redux';

import sprite from '../../assets/img/sprite.svg';

const Header = React.memo(function Header() {
   const dispatch = useDispatch();
   const { login, isAuth } = useSelector((state) => state.auth);

   const logoutHandle = () => {
      dispatch(logout());
   };
   return (
      <header className="header">
         <div className="container header-container">
            <Link to="/profile" className="header__logo">
               <svg>
                  <use href={sprite + '#logo'}></use>
               </svg>
            </Link>
            {isAuth && (
               <div className="header__auth">
                  <span>{login}</span>
                  <button className="btn btn--logout" type="button" onClick={logoutHandle}>
                     Выйти
                  </button>
               </div>
            )}
         </div>
      </header>
   );
});

export default Header;
