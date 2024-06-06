import Input from "./Input.jsx";
import {useInput} from "../hooks/useInput.js";
import {hasMinLength, isEmail, isNotEmpty} from "../util/validation.js";

export default function Login() {
  const {
    handleInputBlur: handleEmailBlur,
    handleInputChange: handleEmailChange,
    value: emailValue,
    error: errorEmail
  } = useInput('', (value) => !isEmail(value) && isNotEmpty(value));
  const {
    handleInputBlur: handlePasswordBlur,
    handleInputChange: handlePasswordChange,
    value: passwordValue,
    error: errorPassword
  } = useInput('', (value) => hasMinLength(value, 6));
  
  function handleSubmit(e) {
    e.preventDefault();
    if (errorEmail || errorPassword) {
      return;
    }
    console.log({emailValue, passwordValue});
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      
      <div className="control-row">
        <Input id="email" name="email" label="Email" value={emailValue}
               error={errorEmail && 'Please enter a valid email'}
               onBlur={handleEmailBlur}
               onChange={handleEmailChange}/>
        <Input id="password" name="password" label="Password" value={passwordValue}
               error={errorPassword && 'Please enter a valid password'}
               onBlur={handlePasswordBlur}
               onChange={handlePasswordChange}/>
      </div>
      
      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
