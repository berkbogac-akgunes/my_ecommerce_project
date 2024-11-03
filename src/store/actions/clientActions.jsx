import { axiosInstance } from '../../helpers/axios.js';
import { getGravatarUrl } from '@/helpers/utils/gravatar.js';

export const SET_USER = 'SET_USER'
export const SET_ROLES = 'SET_ROLES'
export const SET_THEME = 'SET_THEME'
export const SET_LANGUAGE = 'SET_LANGUAGE'
export const LOG_OUT = "LOG_OUT"


export function setUser(user) {
  const gravatarInfo = getGravatarUrl(user.email)
  return(
    {
    type: SET_USER,
    payload: {...user, gravatarInfo},
    }
  )
  }

export const logout = () => ({
  type: LOG_OUT
})
    
export const setRoles = (roles) => ({
  type: SET_ROLES,
  payload: roles,
})
    
export const setTheme = (theme) => ({
  type: SET_THEME,
  payload: theme,
})
    
export const setLanguage = (language) => ({
  type: SET_LANGUAGE,
  payload: language,
})

// Selectors
export const selectRoles = (state) => state.client.roles;

// Thunk Action Creator for Roles
export const fetchRolesIfNeeded = () => {
  return async (dispatch, getState) => {
    const currentRoles = selectRoles(getState());
    
    // Only fetch if roles array is empty
    if (currentRoles.length === 0) {
      try {
        // Replace this with your actual API call
        const response = await fetch('/api/roles');
        const roles = await response.json();
        
        dispatch(setRoles(roles));
      } catch (error) {
        console.error('Error fetching roles:', error);
        // You might want to dispatch an error action here
      }
    }
  };
};

export const loginThunk = (email, password, rememberMe) => async (dispatch) => {
  try {
    const response = await axiosInstance.post('/login', { email, password });
    const user = response.data;

    // Save token to localStorage
    if (rememberMe === true) {
      localStorage.setItem('token', user.token);
    }

    //Add Gravatar URL to user data after successful login
     const userWithAvatar = {
        ...user,
        avatarUrl: getGravatarUrl(email)
      };

    // Dispatch the user information to the store
    dispatch(setUser(user));

    return userWithAvatar

  } catch (error) {
    throw new Error(error.response.data.message || 'Login failed');
  }
};


export const logoutThunk = () => async (dispatch) => {
  try {
    // Remove token from localStorage
    localStorage.removeItem('token');
    
    delete axiosInstance.defaults.headers.common['Authorization'];

    dispatch(logout());
  } catch (error) {
    console.log(error)
  }
};