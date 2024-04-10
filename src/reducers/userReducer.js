import { SET_LOADING, SET_USER, REGISTER_USER, RESTORE_USERS } from '../actions/types';

const initialState = {
  user: {},
  isAuthenticated: false,
  isLoaded: false,  
  registeredUsers: [{
    fullName: "John Doe",
    email: "admin@admin.com",
    password: "password"
  }]
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        isLoaded: action.payload
      };
    case SET_USER:
      return {
        ...state,
        user: action.payload.user,
        isAuthenticated: action.payload.isAuthenticated
      };
    case REGISTER_USER:
      return {
        ...state,
        isAuthenticated: true,
        registeredUsers: [...state.registeredUsers, action.payload]
      };
    case RESTORE_USERS:
      return {
        ...state,
        registeredUsers: [...initialState.registeredUsers, ...action.payload]
      };
    default:
      return state;
  }
}
