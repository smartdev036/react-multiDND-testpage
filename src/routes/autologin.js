import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';


function AutoLogin ({ children }) {
  const auth = useSelector(state => state.user.isAuthenticated);

  if(!auth){
    return children;
  } else {
    return <Redirect to='/projects' />
  }

}

export default AutoLogin;
