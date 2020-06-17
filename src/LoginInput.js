import React from 'react';
import { useField } from 'formik';

export const TextInputLogin = ({label, ...props}) => {
  const [field, meta] = useField(props);

  return (
    // return just a react fragment
    <>
      <label htmlFor={props.loginName}>{label}</label>

      <input className="formik-input" {...field} {...props} />

      { meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
        ) : null }
    </>
  )
}
