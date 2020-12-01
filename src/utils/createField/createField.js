import React from 'react';
import { Field } from 'formik';
import classNames from 'classnames';
function createField(fieldName, value, labelText, inputType, placeholder, { ...props }) {
   return (
      <li className={classNames('form__item', { checkbox: inputType === 'checkbox' })} key={fieldName}>
         {inputType !== 'checkbox' && <div className={'form--label'}>{labelText}</div>}
         {props.errors.fieldName && props.touched.fieldName ? (
            <div className="error-message">{props.errors.fieldName}</div>
         ) : null}
         <Field
            className={classNames(`form--${props.modClassName}`, {
               error: props.errors[fieldName] && props.touched[fieldName],
            })}
            autoFocus={props.autoFocus}
            type={inputType}
            placeholder={placeholder}
            name={props.removable ? `contacts.${fieldName}` : fieldName}
            id={props.removable ? `contacts.${fieldName}` : fieldName}
            value={value}
            checked={inputType === 'checkbox' && value}
         />
         {props.removable && (
            <button
               className="form__btn form__btn--remove"
               type="button"
               onClick={() => props.removeContactHandler(fieldName, value ? false : true)}
            >
               Удалить
            </button>
         )}
         {inputType === 'checkbox' && <label htmlFor={fieldName}>{labelText}</label>}
      </li>
   );
}

export default createField;
