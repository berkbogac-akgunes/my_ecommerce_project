import { SET_USER, SET_ROLES, SET_THEME, SET_LANGUAGE } from '../actions/clientActions'

const initialState = {
    user: {}, //all info about user
    adressList: [],
    creditCards: [],
    roles: [],
    theme: "light",
    language: "en",
}

export const clientReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_USER:
        return {
          ...state,
          user: action.payload,
        };
      case "LOG_OUT":
        return {
          ...state,
          user: null,
        };
      case SET_ROLES:
        return {
          ...state,
          roles: action.payload,
        };
      case SET_THEME:
        return {
          ...state,
          theme: action.payload,
        };
      case SET_LANGUAGE:
        return {
          ...state,
          language: action.payload,
        };
      default:
        return state;
    }
  };