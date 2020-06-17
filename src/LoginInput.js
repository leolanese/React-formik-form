import React, {Children} from 'react';
import { Formik, useField } from 'formik';

//
export const TextInputLogin = ({label, ...props}) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.loginName}>{label}</label>

      <input className="formik-input" {...field} {...props} />

      { meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
        ) : null }
    </>
  )
}
