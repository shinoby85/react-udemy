import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup';

const yupSchema = Yup.object({
  email: Yup.string()
    .required('Required')
    .email('Email is not valid'),
  password: Yup.string()
    .max(6, 'Password must be at least 6 characters')
    .required('Required'),
  ['confirm-password']: Yup.string()
    .max(6, 'Password must be at least 6 characters')
    .required('Required')
  
});

export default function Signup() {
  
  
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        ['confirm-password"']: '',
        ['first-name']: ''
      }}
      validationSchema={yupSchema}
      onSubmit={(data) => {
        console.log(data)
      }
      }
    >
      
      <Form>
        <h2>Welcome on board!</h2>
        <p>We just need a little bit of data from you to get you started 🚀</p>
        
        <div className="control">
          <label htmlFor="email">Email</label>
          <Field type="email" name="email"/>
          <ErrorMessage name="email"/>
        </div>
        
        <div className="control-row">
          <div className="control">
            <label htmlFor="password">Password</label>
            <Field type="password" name="password"/>
            <ErrorMessage name='password'/>
          </div>
          
          <div className="control">
            <label htmlFor="confirm-password">Confirm Password</label>
            <Field
              type="password"
              name="confirm-password"
            />
            <ErrorMessage name='confirm-password'/>
          </div>
        </div>
        
        <hr/>
        
        <div className="control-row">
          <div className="control">
            <label htmlFor="first-name">First Name</label>
            <Field type="text" name="first-name"/>
            <ErrorMessage name='first-name'/>
          
          </div>
        </div>
        
        <p className="form-actions">
          <button type="reset" className="button button-flat">
            Reset
          </button>
          <button type="submit" className="button">
            Sign up
          </button>
        </p>
      </Form>
    </Formik>
  );
}