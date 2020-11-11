import React from 'react';
import { Formik, Field, Form } from 'formik';
import { SiginSchema } from '../validation';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';

import { login } from '../../redux/actions/auth';

function Login() {
   const dispatch = useDispatch();
   const loginHandle =(values) => {
      dispatch(login(values));
   }
   return (
      <div className="login-wrapper block">
         <h1 className="login-title">Войдите в свой аккаунт</h1>
         <Formik
            initialValues={{
               login: '',
               password: '',
               rememberMe: false,
            }}
            validationSchema={SiginSchema}
            onSubmit={(values) => loginHandle(values)}
         >
            {({ values, errors, touched }) => (
               <Form className="login-form">
                  <Field
                     className={classNames('login-form__item', 'login-form--input', {
                        error: errors.login && touched.login,
                     })}
                     type="text"
                     placeholder="Логин"
                     id="login"
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
                     id="password"
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
