import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from "yup";

export default function Signup() {
  const schema = yup.object({
    email: yup.string().required('Required').email('Is not valid'),
    password: yup.string().max(6, 'The password use less than 6 symbols.'),
    ['confirm-password']: yup.string().max(6, 'The password use less than 6 symbols.')
  })
  const {
    register,
    handleSubmit,
    watch,
    formState: {errors}
  } = useForm({
      defaultValues: {acquisition: []},
      resolver: yupResolver(schema)
    }
  );
  const onSubmit = (value) => {
    console.log(value)
  }
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Welcome on board!</h2>
      <p>We just need a little bit of data from you to get you started 🚀</p>
      
      <div className="control">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          {...register('email')}
          aria-invalid={errors.email ? "true" : "false"}
        />
        {errors.email && <p role="alert">{errors.email?.message}</p>}
      </div>
      
      <div className="control-row">
        <div className="control">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" {...register('password')}
                 aria-invalid={errors.password ? "true" : "false"}
          />
          {errors.password && <p role="alert">{errors.password?.message}</p>}
        
        </div>
        
        <div className="control">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            id="confirm-password"
            type="password"
            {...register('confirm-password')}
            aria-invalid={errors['confirm-password'] ? "true" : "false"}
          />
          {errors['confirm-password'] && <p role="alert">{errors['confirm-password']?.message}</p>}
        
        </div>
      </div>
      
      <hr/>
      
      <div className="control-row">
        <div className="control">
          <label htmlFor="first-name">First Name</label>
          <input type="text" id="first-name" {...register('first-name', {min: 4})}
                 aria-invalid={errors['first-name'] ? "true" : "false"}/>
        </div>
        
        <div className="control">
          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last-name" {...register('last-name', {min: 4})}
                 aria-invalid={errors['last-name'] ? "true" : "false"}/>
        </div>
      </div>
      
      <div className="control">
        <label htmlFor="phone">What best describes your role?</label>
        <select id="role" {...register('role')}>
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
            value="google"
            {...register('acquisition')}
          />
          <label htmlFor="google">Google</label>
        </div>
        
        <div className="control">
          <input
            type="checkbox"
            id="friend"
            value="friend"
            {...register('acquisition')}
          />
          <label htmlFor="friend">Referred by friend</label>
        </div>
        
        <div className="control">
          <input type="checkbox" id="other" value="other" {...register('acquisition')}/>
          <label htmlFor="other">Other</label>
        </div>
      </fieldset>
      
      <div className="control">
        <label htmlFor="terms-and-conditions">
          <input type="checkbox" id="terms-and-conditions" {...register('terms')}/>I
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