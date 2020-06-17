import React from 'react';
import { Formik, Form, Field } from 'formik';

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
          setTimeout(() => {
            console.table(data);
            alert("Form valid. Submitting the form now");
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
                <Field
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  className="form-control"
                />
              </div>

              <div className="form-group">
                  <TextInputLogin
                    className="form-control"
                    label="Password"
                    name="Enter password"
                    type="password"
                    placeholder="nothing"
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
