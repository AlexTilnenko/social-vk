import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchAuthUserData, logout } from '../../redux/actions/auth';

import sprite from '../../assets/img/sprite.svg';
import { useDispatch, useSelector } from 'react-redux';

function Header() {
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(fetchAuthUserData());
   }, []); // eslint-disable-line react-hooks/exhaustive-deps

   const { login, isAuth } = useSelector((state) => state.auth);

   const logoutHandle = () => {
      console.log('logout click');
      dispatch(logout());
   }
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
                  <button className='btn btn--logout' type='button' onClick={logoutHandle}>Выйти</button>
               </div>
            )}
         </div>
      </header>
   );
}

export default Header;
