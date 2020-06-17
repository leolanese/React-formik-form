import React from 'react';
import { Formik, Form } from 'formik';

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
        loginName: 'admin',
        loginPassword: 'admin'
      }}
      validationSchema={
        Yup.object({
          loginName: Yup.string()
            .min(5, 'Need 5 characters')
            .max(25, 'Max 25 chartacters')
            .required('Required'),
          loginPassword: Yup.string()
            .required('Required'),
        })
      }
      onSubmit={(data, { setSubmitting, resetForm }) => {
         console.table(data);
         alert("Form valid. Submitting the form now");
         resetForm();
         setSubmitting(false);
        }}
      >

        { props => (
          <Form>
            <div className="login-form">
              <h2 className="text-center">Log in</h2>
              <div className="form-group">
                  <TextInputLogin
                    className="form-control"
                    type="text"
                    label="Enter Label"
                    name="Enter username"
                  ></TextInputLogin>
              </div>
              <div className="form-group">
                  <TextInputLogin
                    className="form-control"
                    label="Enter Label"
                    type="password"
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
