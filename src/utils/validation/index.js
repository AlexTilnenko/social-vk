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

export const SettingsSchema = yup.object().shape({
   fullName: yup.string().min(6, 'Минимум 6 символов').max(30, 'Максимум 30 символов').required('Обязательное поле'),
   aboutMe: yup.string().min(6, 'Минимум 6 символов').max(80, 'Максимум 80 символов').required('Обязательное поле'),
   lookingForAJobDescription: yup
      .string()
      .min(6, 'Минимум 6 символов')
      .max(80, 'Максимум 80 символов')
      .required('Обязательное поле'),
});
