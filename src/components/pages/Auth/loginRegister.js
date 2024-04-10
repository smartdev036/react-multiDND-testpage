import React from 'react';
import { useState } from 'react';
import LoginTab from './loginTab';
import RegisterTab from './RegisterTab';

function LoginRegister() {

  const [page, setPage] = useState('login');

  return ( 
    <div className="login-register">
    <div className="login">
      <h3 className="d-flex">
        <div className={(page==='login')?'active':''} onClick={()=>setPage('login')}>
          <p>Log In</p>
          <div className="bottom-bar"> </div>
        </div>
        <div className={(page==='signup')?'active':''} onClick={()=>setPage('signup')}>
          <p>Sign up</p>
          <div className="bottom-bar"> </div>
        </div>
      </h3>                                    
      <div className="content">
        {
          (page === 'login')
          ? <LoginTab />
          : <RegisterTab />
        }
      </div>
    </div>

  </div>

   );
}

export default LoginRegister;