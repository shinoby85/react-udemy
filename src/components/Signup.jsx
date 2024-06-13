import {useFormik} from "formik";
import * as Yup from 'yup';

const yupSchema = Yup.object({
  email: Yup.string()
    .max(14, 'Must be 14 characters or less')
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
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      ['confirm-password"']: '',
      ['first-name']: '',
      ['last-name']: '',
      role: 'student',
      acquisition: '',
      terms: ''
    },
    validationSchema: yupSchema,
    onSubmit: (data) => {
      console.log(data);
    }
  });
  
  
  return (
    <form onSubmit={formik.handleSubmit}>
      <h2>Welcome on board!</h2>
      <p>We just need a little bit of data from you to get you started 🚀</p>
      
      <div className="control">
        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" onChange={formik.handleChange} value={formik.values.email}
               onBlur={formik.handleBlur}/>
        {formik.errors.email && formik.touched.email ? <div>{formik.errors.email}</div> : null}
      </div>
      
      <div className="control-row">
        <div className="control">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" onChange={formik.handleChange}
                 value={formik.values.password} onBlur={formik.handleBlur}/>
          {formik.errors.password && formik.touched.password ? <div>{formik.errors.password}</div> : null}
        </div>
        
        <div className="control">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            id="confirm-password"
            type="password"
            name="confirm-password"
            onChange={formik.handleChange}
            value={formik.values['confirm-password']}
            onBlur={formik.handleBlur}
          />
          {formik.errors['confirm-password'] && formik.touched['confirm-password'] ?
            <div>{formik.errors['confirm-password']}</div> : null}
        
        </div>
      </div>
      
      <hr/>
      
      <div className="control-row">
        <div className="control">
          <label htmlFor="first-name">First Name</label>
          <input type="text" id="first-name" name="first-name" onChange={formik.handleChange}
                 value={formik.values['first-name']} onBlur={formik.handleBlur}/>
        </div>
        
        <div className="control">
          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last-name" name="last-name" onChange={formik.handleChange}
                 value={formik.values['last-name']} onBlur={formik.handleBlur}/>
        </div>
      </div>
      
      <div className="control">
        <label htmlFor="phone">What best describes your role?</label>
        <select id="role" name="role" onChange={formik.handleChange} value={formik.values['role']}
                onBlur={formik.handleBlur}>
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
          <option value="employee">Employee</option>
          <option value="founder">Founder</option>
          <option value="other">Other</option>
        </select>
      </div>
      
      <fieldset>
        <legend>How did you find us?</legend>
        <div className="control">
          <input
            type="checkbox"
            id="google"
            name="acquisition"
            value="google"
            onChange={formik.handleChange}
            checked={formik.values['acquisition'] === 'google'} onBlur={formik.handleBlur}
          />
          <label htmlFor="google">Google</label>
        </div>
        
        <div className="control">
          <input
            type="checkbox"
            id="friend"
            name="acquisition"
            value="friend"
            onChange={formik.handleChange}
            checked={formik.values['acquisition'] === 'friend'} onBlur={formik.handleBlur}
          />
          <label htmlFor="friend">Referred by friend</label>
        </div>
        
        <div className="control">
          <input type="checkbox" id="other" name="acquisition" value="other" onChange={formik.handleChange}
                 checked={formik.values['acquisition'] === 'other'} onBlur={formik.handleBlur}/>
          <label htmlFor="other">Other</label>
        </div>
      </fieldset>
      
      <div className="control">
        <label htmlFor="terms-and-conditions">
          <input type="checkbox" id="terms-and-conditions" name="terms" onChange={formik.handleChange}
                 value={formik.values.terms} onBlur={formik.handleBlur}/>I
          agree to the terms and conditions
        </label>
      </div>
      
      <p className="form-actions">
        <button type="reset" className="button button-flat">
          Reset
        </button>
        <button type="submit" className="button">
          Sign up
        </button>
      </p>
    </form>
  );
}