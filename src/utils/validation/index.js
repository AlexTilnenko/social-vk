import * as yup from 'yup';

export const SiginSchema = yup.object().shape({
   login: yup.string().min(6, 'Слишком короткий логин!').max(50, 'Слишком длинный логин!').required('Введите логин!'),
   password: yup
      .string()
      .min(6, 'Слишком короткий пароль!')
      // .matches(/^(?=.*\d)(?=.*[a-zA-Z]).{6,}$/g, 'Пароль должен содержать цифры и латинские буквы верхнего и нижнего регистра!')
      .required('Введите пароль!'),
   rememberMe: yup.bool(),
   captcha: yup.string(),
});
