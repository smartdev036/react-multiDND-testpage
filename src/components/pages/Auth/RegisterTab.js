import img_eye_open from '../../../assets/icons/eye_open.svg';
import img_eye_close from '../../../assets/icons/eye_close.svg';
import img_caution from '../../../assets/icons/caution.svg';
import img_checked1 from '../../../assets/icons/checked1.svg';

import React, { useState } from 'react';
import { ValidateEmail } from '../../../utils/validate';
import { useHistory } from 'react-router-dom'
import { registerUser } from '../../../actions/userAction';
import { useDispatch } from 'react-redux';

function RegisterTab() {
  const [error, setError] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const history = useHistory();
  const dispatch = useDispatch();

  const handleRegister = () => {
    if(fullName.length === 0){
      setError("Input Full name, please.");
      return;
    }
    if(email.length === 0){
      setError("Input email, please.");
      return;
    }
    if(ValidateEmail(email) === false) {
      setError("Please Enter a valid Email.");
       return;
    } 
    if(password.length < 8) {
      setError("Password should be longer than 8.");
      return;
    }    
    setError('');
    dispatch(
      registerUser({fullName, email, password}, history, rememberMe)
    );
  }

  return ( 
    <>
        <hr />
        <input placeholder="Full name" onChange={e=>setFullName(e.target.value)}/> 
        <input placeholder="Email" onChange={e=>setEmail(e.target.value)}/> 
        <div className="position-relative">
          <input type={showPassword===true?'type':'password'} placeholder="Password" onChange={e=>setPassword(e.target.value)} className='password'/>                       
          {
            showPassword === true
              ? <img className="eye-open" src={img_eye_open} alt='eye' onClick={()=>setShowPassword(false)}/>
              : <img className="eye-open" src={img_eye_close} alt='eye' onClick={()=>setShowPassword(true)}/>
          }
        </div>
        <div className={"error-msg "+ (error.length === 0 ? 'no-error ': '' )}>
          <img className="caution" src={img_caution} alt='caution' />
          {error}
        </div>
        <button onClick={handleRegister}>Register</button>
        <div className="d-flex remember">
          {
            rememberMe === true 
              ? <img src={img_checked1} alt='alt' className='checkbox1' onClick={()=>setRememberMe(false)}/>
              : <div className='checkbox1 checkbox-opened' onClick={()=>setRememberMe(true)}/>
          }
          
          <span>Remeber Me</span>
        </div>
      </>
   );
}

export default RegisterTab;