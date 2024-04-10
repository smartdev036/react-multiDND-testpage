import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';


function PrivateRoute ({ component: Component, ...rest }) {
  const auth = useSelector(state => state.user.isAuthenticated);

  if(auth){
    return (
      <Route
        {...rest}
        component = {Component}
      />
    );
  } else {
    return <Redirect to='/' />
  }

}

export default PrivateRoute;
