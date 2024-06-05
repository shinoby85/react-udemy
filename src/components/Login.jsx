import {useState} from "react";
import Input from "./Input.jsx";
import {hasMinLength, isEmail, isNotEmpty} from "../util/validation.js";

export default function Login() {
  const [enteredValue, setEnteredValue] = useState({
    email: '',
    password: ''
  });
  
  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false
  });
  
  const emailIsInvalid = didEdit.email && !isEmail(enteredValue.email) && !isNotEmpty(enteredValue.email);
  const passwordIsInvalid = didEdit.password && hasMinLength(enteredValue.password, 6);
  
  function handleSubmit(e) {
    e.preventDefault();
    console.log(enteredValue);
  }
  
  function handleInputBlur(identifier) {
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: true
    }));
  }
  
  function handleInputChange(identifier, value) {
    setEnteredValue(prevValues => ({
      ...prevValues,
      [identifier]: value
    }))
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: false
    }))
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      
      <div className="control-row">
        <Input id="email" name="email" label="Email" value={enteredValue.email}
               error={emailIsInvalid && 'Please enter a valid email'}
               onBlur={() => handleInputBlur("email")}
               onChange={(ev) => handleInputChange('email', ev.target.value)}/>
        <Input id="password" name="password" label="Password" value={enteredValue.password}
               error={passwordIsInvalid && 'Please enter a valid password'}
               onBlur={() => handleInputBlur("password")}
               onChange={(ev) => handleInputChange('password', ev.target.value)}/>
      </div>
      
      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
