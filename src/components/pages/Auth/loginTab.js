import React, { useState } from 'react';
import img_eye_open from '../../../assets/icons/eye_open.svg';
import img_eye_close from '../../../assets/icons/eye_close.svg';
import img_checked1 from '../../../assets/icons/checked1.svg';
import img_caution from '../../../assets/icons/caution.svg';
import { ValidateEmail } from '../../../utils/validate';
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { setLoginUser } from '../../../actions/userAction';

function LoginTab() {
  const [error, setError] = useState('');
  const [email, setEmail] = useState('admin@admin.com');
  const [password, setPassword] = useState('password');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const registeredUsers = useSelector( state => state.user.registeredUsers);

  const history = useHistory();
  const dispatch = useDispatch();

  const handleLogin = () => {
    if(email.length === 0){
      setError("Input email, please.");
      return;
    }
    if(ValidateEmail(email)===false) {
      setError("Please Enter a valid Email.");
      return;
    } 

    let who = registeredUsers.find(user => user.email === email);
    if( (who === undefined) || (who.password !== password) ) {
      setError("Your Email & Password do not  match");
      return;
    }    

    dispatch(
      setLoginUser(
        {
          user: who,
          isAuthenticated: true
        }, 
        history,
        rememberMe
      )
    );

  }

  return ( 
      <div>
        <hr />
        <h4>To Continue</h4>
        <p className="need">We need your Name & Email</p>
        <input placeholder="Email"  onChange={e=>setEmail(e.target.value)} value={email}/> 
        <div className="position-relative">
          <input type={showPassword===true?'type':'password'} placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} className='password'/>                       
          {
            showPassword === false
              ? <img className="eye-open" src={img_eye_open} alt='eye' onClick={()=>setShowPassword(false)}/>
              : <img className="eye-open" src={img_eye_close} alt='eye' onClick={()=>setShowPassword(true)}/>
          }
        </div>
        <div className={"error-msg "+ (error.length === 0 ? 'no-error ': '' )}>
          <img className="caution" src={img_caution} alt='caution' />
          {error}
        </div>
        <button onClick={handleLogin}>Log In</button>
        <div className="d-flex remember">
          {
            rememberMe === true 
              ? <img src={img_checked1} alt='alt' className='checkbox1' onClick={()=>setRememberMe(false)}/>
              : <div className='checkbox1 checkbox-opened' onClick={()=>setRememberMe(true)}/>
          }
          
          <span>Remeber Me</span>
        </div>
      </div>
   );
}

export default LoginTab;