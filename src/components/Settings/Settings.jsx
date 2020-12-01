import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { compose } from 'redux';
import { Formik, Form } from 'formik';
import classNames from 'classnames';
import Loader from '../common/Loader/Loader';
import withAuthRedirect from '../hoc/withAuthRedirect';
import createField from '../../utils/createField/createField';
import { fetchUserProfile, setUserContactsLink, updateUserProfile } from '../../actions/profile';
import { selectAddedSocialsLinks, selectEmptySocialsLinks, selectProfileData } from '../../selectors/profileSelectors';
import { selectAuthUserId } from '../../selectors/authSelectors';
import { SettingsSchema } from '../../utils/validation/';
function Settings() {
   const dispatch = useDispatch();
   const emptyLinksRef = useRef();

   const [visibleEmptyLinks, setVisibleEmptyLinks] = useState(false);
   const [message, setMessage] = useState('');

   const myId = useSelector(selectAuthUserId);
   const { userId, aboutMe, fullName, lookingForAJob, lookingForAJobDescription, contacts } = useSelector(
      selectProfileData
   );
   const emptyLinks = useSelector(selectEmptySocialsLinks);
   const addedLinks = useSelector(selectAddedSocialsLinks);

   useEffect(() => {
      if (userId !== myId) {
         dispatch(fetchUserProfile(myId));
      }
      document.body.addEventListener('mousedown', outsideClickHandle);
      return () => {
         document.body.removeEventListener('mousedown', outsideClickHandle);
      };
   }, []); // eslint-disable-line react-hooks/exhaustive-deps

   const onSuccess = (message) => {
      setMessage(message);
      setInterval(() => setMessage(''), 3000);
   };
   const onError = (message) => {
      setMessage(message);
      setInterval(() => setMessage(''), 3000);
   };
   const changeUserDataHandler = (data) => {
      dispatch(updateUserProfile(myId, data, onSuccess, onError));
      setMessage(Loader);
   };
   const removeContactHandler = (linkName, isAdd) => {
      dispatch(setUserContactsLink(linkName, isAdd));
   };
   const addContactHandler = () => {
      if (emptyLinks.length) setVisibleEmptyLinks(true);
   };
   const selectContactHandler = (linkName, isAdd) => {
      dispatch(setUserContactsLink(linkName, isAdd));
      setVisibleEmptyLinks(false);
   };
   const outsideClickHandle = (e) => {
      const path = e.path || (e.composedPath && e.composedPath());
      if (!path.includes(emptyLinksRef.current)) {
         setVisibleEmptyLinks(false);
      }
   };

   if (myId !== userId) {
      return <Loader />;
   }

   return (
      <div className="settings">
         {message && <div className="settings__status-message">{message}</div>}
         <div className="settings__title">Настройки профиля</div>
         <Formik
            enableReinitialize={true}
            initialValues={{
               fullName: fullName,
               aboutMe: aboutMe,
               lookingForAJob: lookingForAJob,
               lookingForAJobDescription: lookingForAJobDescription,
               contacts: {
                  github: contacts.github,
                  vk: contacts.vk,
                  facebook: contacts.facebook,
                  instagram: contacts.instagram,
                  twitter: contacts.twitter,
                  website: contacts.website,
                  youtube: contacts.youtube,
                  mainLink: contacts.mainLink,
               },
            }}
            validationSchema={SettingsSchema}
            onSubmit={(values) => changeUserDataHandler(values)}
         >
            {({ values, errors, touched }) => (
               <Form className="settings-form">
                  {errors.fullName && touched.fullName ? <div className="error-message">{errors.fullName}</div> : null}
                  {createField('fullName', values.fullName, 'Полное имя:', 'text', 'Введите имя', {
                     errors,
                     touched,
                     modClassName: 'input',
                  })}
                  {errors.aboutMe && touched.aboutMe ? <div className="error-message">{errors.aboutMe}</div> : null}
                  {createField('aboutMe', values.aboutMe, 'Обо мне:', 'text', 'Добавьте немного информации о Вас', {
                     errors,
                     touched,
                     modClassName: 'input',
                  })}
                  {createField('lookingForAJob', values.lookingForAJob, 'В поисках работы?', 'checkbox', null, {
                     errors,
                     touched,
                     modClassName: 'checkbox',
                  })}
                  {errors.lookingForAJobDescription && touched.lookingForAJobDescription ? (
                     <div className="error-message">{errors.lookingForAJobDescription}</div>
                  ) : null}
                  {createField(
                     'lookingForAJobDescription',
                     values.lookingForAJobDescription,
                     'Stack:',
                     'text',
                     'Какими технологиями владеете',
                     {
                        errors,
                        touched,
                        modClassName: 'input',
                     }
                  )}
                  <div className="contacts">
                     <div className="contacts__header">
                        <div className="contacts__title">Контакты:</div>
                        {emptyLinks.length ? (
                           <button
                              className="contacts__btn contacts__btn--add"
                              type="button"
                              onClick={addContactHandler}
                           >
                              Добавить ссылку
                           </button>
                        ) : (
                           ''
                        )}
                     </div>
                     <div className="contacts__body">
                        <div
                           className={classNames('contacts__empty-links', { active: visibleEmptyLinks })}
                           ref={emptyLinksRef}
                        >
                           <div className="contacts__empty-links-title">Выберите соц. сеть:</div>
                           {emptyLinks.map((item) => {
                              return (
                                 <span key={item[0]} onClick={() => selectContactHandler(item[0], true)}>
                                    {item[0]}
                                 </span>
                              );
                           })}
                        </div>
                        <div className="contacts__added-links">
                           {addedLinks.map((item) => {
                              return createField(
                                 item[0],
                                 values.contacts[item[0]],
                                 `${item[0]}:`,
                                 'text',
                                 'Добавьте ссылку на Вашу страницу',
                                 {
                                    errors,
                                    touched,
                                    modClassName: 'input',
                                    autoFocus: true,
                                    removable: true,
                                    removeContactHandler,
                                 }
                              );
                           })}
                        </div>
                     </div>
                  </div>
                  <button
                     className="settings-form__submit btn btn--profile-save"
                     type="submit"
                     disabled={errors.fullName}
                  >
                     Сохранить
                  </button>
               </Form>
            )}
         </Formik>
      </div>
   );
}

export default compose(withAuthRedirect)(Settings);
