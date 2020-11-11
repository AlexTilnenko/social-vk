import React from 'react';
import { reduxForm } from 'redux-form';

function Login() {
   return (
      <div className="login-wrapper block">
         <form className="login-form">
            <input
               className="login-form__item login-form--input"
               type="text"
               placeholder="Логин"
            ></input>
            <input
               className="login-form__item login-form--input"
               type="password"
               placeholder="Пароль"
            ></input>
            <div className="login-form__item">
               <input
                  className="login-form-checkbox"
                  type="checkbox"
                  id="remember"
               />
               <label className="login-form-label" htmlFor="remember">
                  Запомнить меня
               </label>
            </div>
            <button className="btn btn--login">Войти</button>
         </form>
      </div>
   );
}

export default reduxForm({ form: 'login' })(Login);
