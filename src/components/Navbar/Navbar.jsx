import React from 'react';
import { Link } from 'react-router-dom';

import sprite from '../../assets/img/sprite.svg';

function Navbar() {
   return (
      <nav className="navbar">
         <ul className="navbar__list">
            <li className="navbar__list-item">
               <Link to="/profile" className="navbar__list-link">
                  <svg className="navbar__list-ico">
                     <use href={sprite + '#home'} />
                  </svg>
                  <span>Моя страница</span>
               </Link>
            </li>
            <li className="navbar__list-item">
               <Link to="/friends" className="navbar__list-link">
                  <svg className="navbar__list-ico">
                     <use href={sprite + '#friends'} />
                  </svg>
                  <span>Друзья</span>
               </Link>
            </li>
            <li className="navbar__list-item">
               <Link to="/messanger" className="navbar__list-link">
                  <svg className="navbar__list-ico">
                     <use href={sprite + '#messages'} />
                  </svg>
                  <span>Сообщения</span>
               </Link>
            </li>
            <li className="navbar__list-item">
               <Link to="/users" className="navbar__list-link">
                  <svg className="navbar__list-ico">
                     <use href={sprite + '#users'} />
                  </svg>
                  <span>Пользователи</span>
               </Link>
            </li>
            <li className="navbar__list-item">
               <Link to="/settings" className="navbar__list-link">
                  <svg className="navbar__list-ico">
                     <use href={sprite + '#settings'} />
                  </svg>
                  <span>Настройки</span>
               </Link>
            </li>
         </ul>
      </nav>
   );
}

export default Navbar;
