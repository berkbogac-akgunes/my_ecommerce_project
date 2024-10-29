export const SET_USER = 'SET_USER'
export const SET_ROLES = 'SET_ROLES'
export const SET_THEME = 'SET_THEME'
export const SET_LANGUAGE = 'SET_LANGUAGE'


export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
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