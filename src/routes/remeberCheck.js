import { useEffect } from 'react';
import {  useHistory, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { restoreUsers, setLoginUser } from '../actions/userAction';


function RemmeberCheck ({ children }) {
  const dispatch = useDispatch();
  const location = useLocation();
  const userData = useSelector( state => state.user);
  const history = useHistory();

  useEffect( () => {
    if(userData.isAuthenticated === false){
      let isAuthenticated = JSON.parse(localStorage.getItem('rememberMe'));
      if(isAuthenticated){
        let localData = JSON.parse(localStorage.getItem('userData'));
        dispatch( 
          setLoginUser({
            user: localData,
            isAuthenticated: true,
            }, 
            history,
            true
          )
        )
      }
    } 
    if(location.pathname === '/'){
      let users = JSON.parse(localStorage.getItem('registeredUsers')) || [];
      dispatch( 
        restoreUsers(users)
      );
    }
  }, [location.pathname]);

  return children;

}

export default RemmeberCheck;
