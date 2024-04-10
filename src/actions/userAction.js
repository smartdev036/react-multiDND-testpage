import { REGISTER_USER, RESTORE_USERS, SET_LOADING, SET_USER } from "./types"

// Global loading overlay.
export const setLoadingOverlay = (isLoaded) => dispatch => {
  dispatch({ 
    type: SET_LOADING, 
    payload: isLoaded
  });
}

// login user simulation by using localstorage
export const setLoginUser = (userData, history, rememberMe) => dispatch => {
  dispatch({ 
    type: SET_USER, 
    payload: userData
  });
  localStorage.setItem('userData', JSON.stringify(userData.user))
  localStorage.setItem('rememberMe', JSON.stringify(rememberMe))
  history.push('/projects');
}

// register user simulation by using localstorage
export const registerUser = (userData, history, rememberMe) => dispatch => {
  dispatch({ 
    type: REGISTER_USER, 
    payload: userData
  });
  let users = JSON.parse(localStorage.getItem('registeredUsers')) || [];
  users.push(userData);
  localStorage.setItem('registeredUsers', JSON.stringify(users))
  localStorage.setItem('userData', JSON.stringify(userData))
  localStorage.setItem('rememberMe', JSON.stringify(rememberMe))
  history.push('/projects');
}

// restore user from localstorage when referesh.
export const restoreUsers = (userData) => dispatch => {
  dispatch({ 
    type: RESTORE_USERS, 
    payload: userData
  });
}

// logout 
export const logout = (history) => dispatch=> {
  dispatch({ 
    type: SET_USER, 
    payload: {
      user: {},
      isAuthenticated: false
    }
  });
  localStorage.removeItem('userData')
  localStorage.removeItem('rememberMe')
  history.push('/');
}

