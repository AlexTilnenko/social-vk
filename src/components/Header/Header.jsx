import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../actions/auth';
import { useDispatch } from 'react-redux';
import { selectAuthData } from '../../selectors/authSelectors';
import sprite from '../../assets/img/sprite.svg';

const Header = React.memo(function Header() {
   const dispatch = useDispatch();
   const { login, isAuth } = useSelector(selectAuthData);
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
            {isAuth ? (
               <div className="header__auth">
                  <span className="header__auth-login">{login}</span>
                  <div className="header__auth-popup">
                     <Link to="/profile" className="header__auth-item">
                        {login}
                     </Link>
                     <Link to="/settings" className="header__auth-item">
                        Настройки
                     </Link>
                     <button className="header__auth-item btn btn--logout" type="button" onClick={logoutHandle}>
                        Выйти
                     </button>
                  </div>
               </div>
            ) : (
               <Link to="/login" className="header__auth-login">
                  Войти
               </Link>
            )}
         </div>
      </header>
   );
});

export default Header;
