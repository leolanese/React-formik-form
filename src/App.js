import React from 'react';
import { Formik, useField, Form } from 'formik';

import * as Yup from 'yup';

import 'bootstrap/dist/css/bootstrap.css';
import { StylesFormik } from './react-formik-style';
import { TextInputLogin } from './LoginInput';

function App() {
  return (
    // intital values
    // yup validation schema
    <StylesFormik>
      <Formik
      intitalValues={{
        loginName: '',
        loginPassword: ''
      }}
      validationSchema={
        Yup.object({
          loginName: Yup.string()
            .min(5, 'Need 5 characters')
            .max(25, 'Max 25 chartacters')
            .default('loginName')
            .required('Required'),
          loginPassword: Yup.string()
            .email('Invalid e-mail')
            .default('loginPassword')
            .required('Required'),
        })
      }
      onSubmit={(data, { setSubmitting, resetForm }) => {
         setTimeout(() => {
           console.table(data);
           resetForm();
           setSubmitting(false);
         }, 1000)
      }}
      >

        { props => (
          <Form>
            <div className="login-form">
              <h2 className="text-center">Log in</h2>
              <div className="form-group">
                  <TextInputLogin
                    className="form-control"
                    label="Enter Label"
                    name="Enter username"
                  ></TextInputLogin>
              </div>
              <div className="form-group">
                  <TextInputLogin
                    className="form-control"
                    label="Enter Label"
                    name="Enter password"
                    type="password"

                  ></TextInputLogin>
              </div>
              <div className="form-group">
                  <button type="submit" className="btn btn-primary btn-block">{props.isSubmitting ? 'Loading': 'Loggin'}</button>
              </div>
            </div>
          </Form>
        )}

      </Formik>
    </StylesFormik>
  );
}

export default App;
