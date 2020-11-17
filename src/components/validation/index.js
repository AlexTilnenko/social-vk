import * as Yup from 'yup';

export const SiginSchema = Yup.object().shape({
   login: Yup.string()
      .min(6, 'Слишком короткий логин!')
      .max(50, 'Слишком длинный логин!')
      .required('Введите логин!'),
   password: Yup.string()
      .min(6, 'Слишком короткий пароль!')
      // .matches(/^(?=.*\d)(?=.*[a-zA-Z]).{6,}$/g, 'Пароль должен содержать цифры и латинские буквы верхнего и нижнего регистра!')
      .required('Введите пароль!'),
   rememberMe: Yup.bool(),
   captcha: Yup.string(),
});
