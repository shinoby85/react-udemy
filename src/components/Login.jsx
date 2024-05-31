import {useRef, useState} from "react";

export default function Login() {
  const [emailIsInvalid, setEmailIsInvalid] = useState(false);
  const mail = useRef();
  const password = useRef();
  
  function handleSubmit(e) {
    e.preventDefault();
    const enteredMail = mail.current.value;
    const enteredPassword = password.current.value;
    const emailIsValid = enteredMail.includes('@');
    if (!emailIsValid) {
      setEmailIsInvalid(true);
      return;
    }
    if (emailIsValid && !enteredMail) {
      setEmailIsInvalid(true);
      return;
    }
    setEmailIsInvalid(false);
    
    console.log(enteredMail, enteredPassword);
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      
      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="" name="email" ref={mail}/>
          <div className="control-error">{emailIsInvalid && <p>Error code/</p>}</div>
        </div>
        
        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" ref={password}/>
        </div>
      </div>
      
      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
