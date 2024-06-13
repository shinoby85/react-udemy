import {ErrorMessage, Field, Form, Formik, useField} from "formik";
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
  const MyCheckbox = ({children, ...props}) => {
    const [field, meta] = useField({...props, type: 'checkbox'});
    return (
      <div>
        <label className="checkbox-input">
          <input type="checkbox" {...field} {...props} />
          {children}
        </label>
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </div>
    );
  };
  const MySelect = ({label, ...props}) => {
    const [field, meta] = useField(props);
    return (
      <div>
        <label htmlFor={props.id || props.name}>{label}</label>
        <select {...field} {...props} />
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </div>
    );
  };
  
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        ['confirm-password"']: '',
        ['first-name']: '',
        ['last-name']: '',
        role: 'student',
        acquisition: ''
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
          
          <div className="control">
            <label htmlFor="last-name">Last Name</label>
            <Field type="text" name="last-name"/>
            <ErrorMessage name='last-name'/>
          </div>
        </div>
        
        <div className="control">
          <MySelect label='What best describes your role?' name='role'>
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
            <option value="employee">Employee</option>
            <option value="founder">Founder</option>
            <option value="other">Other</option>
          </MySelect>
        </div>
        
        <fieldset>
          <legend>How did you find us?</legend>
          <div className="control">
            <MyCheckbox name="acquisition">
              Google
            </MyCheckbox>
            <MyCheckbox name="acquisition">
              Referred by friend
            </MyCheckbox>
            <MyCheckbox name="acquisition">
              Other
            </MyCheckbox>
          </div>
        
        
        </fieldset>
        
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