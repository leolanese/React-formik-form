import React from 'react';
import { Formik, Form } from 'formik';

import { LoginSchema } from './Schemas';

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

        validationSchema={LoginSchema}

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
