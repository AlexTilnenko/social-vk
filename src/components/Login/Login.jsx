import React from 'react';
import { Formik, Field, Form } from 'formik';
import { SiginSchema } from '../validation';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';

import { login } from '../../redux/actions/auth';
import { useState } from 'react';

function Login() {
   const dispatch = useDispatch();
   const [errorMessage, setErrorMessage] = useState('');

   const captchaUrl = useSelector((state) => state.auth.captchaUrl);

   const loginHandle = (values) => {
      dispatch(
         login(
            values,
            () => console.log('login success'),
            (message) => setErrorMessage(message)
         )
      );
   };
   return (
      <div className="login-wrapper block">
         <h1 className="login-title">Войдите в свой аккаунт</h1>
         <Formik
            initialValues={{
               login: '',
               password: '',
               rememberMe: false,
               captcha: '',
            }}
            validationSchema={SiginSchema}
            onSubmit={(values) => loginHandle(values)}
         >
            {({ values, errors, touched }) => (
               <Form className="login-form">
                  {errorMessage && <div className="error-message">{errorMessage}</div>}
                  <Field
                     className={classNames('login-form__item', 'login-form--input', {
                        error: errors.login && touched.login,
                     })}
                     type="text"
                     placeholder="Логин"
                     name="login"
                     value={values.login}
                  />
                  {errors.login && touched.login ? (
                     <div className="error-message">{errors.login}</div>
                  ) : null}
                  <Field
                     className={classNames('login-form__item', 'login-form--input', {
                        error: errors.password && touched.password,
                     })}
                     type="password"
                     placeholder="Пароль"
                     name="password"
                     value={values.password}
                  />
                  {errors.password && touched.password ? (
                     <div className="error-message">{errors.password}</div>
                  ) : null}

                  <div className="login-form__item">
                     <Field
                        className="login-form-checkbox"
                        type="checkbox"
                        id="rememberMe"
                        name="rememberMe"
                     />
                     <label className="login-form-label" htmlFor="rememberMe">
                        Запомнить меня
                     </label>
                  </div>
                  {captchaUrl && (
                     <div className="login-form__item login-form--captcha">
                        <img src={captchaUrl} alt="" />
                        <Field
                           className={classNames('login-form--input', {
                              error: errors.captcha && touched.captcha,
                           })}
                           type="text"
                           placeholder="Введите текст с картинки"
                           name="captcha"
                        />
                     </div>
                  )}
                  <button
                     className="login-form__submit btn btn--login"
                     type="submit"
                     disabled={errors.login || errors.password}
                  >
                     Войти
                  </button>
               </Form>
            )}
         </Formik>
      </div>
   );
}

export default Login;
