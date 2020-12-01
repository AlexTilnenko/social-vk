import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import classNames from 'classnames';
import { Formik, Field, Form } from 'formik';
import { login } from '../../actions/auth';
import { SiginSchema } from '../../utils/validation';
import { selectAuthData } from '../../selectors/authSelectors';

function Login() {
   const dispatch = useDispatch();
   const [errorMessage, setErrorMessage] = useState('');

   const { captchaUrl, isAuth } = useSelector(selectAuthData);

   const loginHandle = (values) => {
      dispatch(
         login(values, (message) => {
            setErrorMessage(message);
         })
      );
   };

   if (isAuth) {
      return <Redirect to="/profile" />;
   }
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
                  {errors.login && touched.login ? <div className="error-message">{errors.login}</div> : null}
                  <Field
                     className={classNames('login-form__item', 'login-form--input', {
                        error: errors.password && touched.password,
                     })}
                     type="password"
                     placeholder="Пароль"
                     name="password"
                     value={values.password}
                  />
                  {errors.password && touched.password ? <div className="error-message">{errors.password}</div> : null}

                  <div className="login-form__item checkbox">
                     <Field className="login-form-checkbox" type="checkbox" id="rememberMe" name="rememberMe" />
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
