import { axiosInstance } from "@/helpers/axios"

export const SET_CATEGORIES = 'SET_CATEGORIES'
export const SET_PRODUCT_LIST = 'SET_PRODUCT_LIST'
export const SET_TOTAL = 'SET_TOTAL'
export const SET_FETCH_STATE = 'SET_FETCH_STATE'
export const SET_LIMIT = 'SET_LIMIT'
export const SET_OFFSET = 'SET_OFFSET'
export const SET_FILTER = 'SET_FILTER'

export const FETCH_CATEGORIES_START = 'FETCH_CATEGORIES_START';
export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS';
export const FETCH_CATEGORIES_FAILURE = 'FETCH_CATEGORIES_FAILURE';

export const setCategories = (categories) => ({
    type: SET_CATEGORIES,
    payload: categories
})
export const setProductList = (products) => ({
    type: SET_PRODUCT_LIST,
    payload: products
})
export const setTotal = (total) => ({
    type: SET_TOTAL,
    payload: total
})
export const setFetchState = (state) => ({
    type: SET_FETCH_STATE,
    payload: state
})
export const setLimit = (limit) => ({
    type: SET_LIMIT,
    payload: limit
})
export const setOffset = (offset) => ({
    type: SET_OFFSET,
    payload: offset
})
export const setFilter = (filter) => ({
    type: SET_FILTER,
    payload: filter
})
export const fetchCategoriesStart = () => ({
    type: FETCH_CATEGORIES_START
  });
  
  export const fetchCategoriesSuccess = (categories) => ({
    type: FETCH_CATEGORIES_SUCCESS,
    payload: categories
  });
  
  export const fetchCategoriesFailure = (error) => ({
    type: FETCH_CATEGORIES_FAILURE,
    payload: error
  });

  export const fetchCategories = () => {
    return async (dispatch) => {
      dispatch(fetchCategoriesStart());
      try {
        const response = await axiosInstance.get('/categories');
        dispatch(fetchCategoriesSuccess(response.data));
      } catch (error) {
        dispatch(fetchCategoriesFailure(error.message));
      }
    };
  };