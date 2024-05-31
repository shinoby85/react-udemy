import {useState} from "react";

export default function Login() {
  const [enteredValue, setEnteredValue] = useState({
    email: '',
    password: ''
  });
  
  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false
  })
  
  const emailIsInvalid = didEdit.email && !enteredValue.email.includes('@');
  
  function handleSubmit(e) {
    e.preventDefault();
    console.log(enteredValue);
  }
  
  function handleInputBlur(identifier) {
    setDidEdit(prevEdit => ({
      ...prevEdit,
      [identifier]: true
    }))
  }
  
  function handleInputChange(identifier, value) {
    setEnteredValue(prevValues => ({
      ...prevValues,
      [identifier]: value
    }));
    setDidEdit(prevEdit => ({
      ...prevEdit,
      [identifier]: false
    }))
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      
      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onBlur={() => handleInputBlur('email')}
            onChange={(ev) => handleInputChange('email', ev.target.value)}
            value={enteredValue.email}/>
          <div className="control-error">{emailIsInvalid && <p>Please enter a valid email address.</p>}</div>
        </div>
        
        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={(ev) => handleInputChange('password', ev.target.value)}
            value={enteredValue.password}
          />
        </div>
      </div>
      
      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
