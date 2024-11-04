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
export const FETCH_PRODUCTS_START = 'FETCH_PRODUCTS_START';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR';
export const FETCH_PRODUCT_DETAIL_START = 'FETCH_PRODUCT_DETAIL_START';
export const FETCH_PRODUCT_DETAIL_SUCCESS = 'FETCH_PRODUCT_DETAIL_SUCCESS';
export const FETCH_PRODUCT_DETAIL_ERROR = 'FETCH_PRODUCT_DETAIL_ERROR';

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

  export const fetchProductsStart = () => ({
    type: FETCH_PRODUCTS_START,
  });
  
  export const fetchProductsSuccess = (data) => ({
    type: FETCH_PRODUCTS_SUCCESS,
    payload: data,
  });
  
  export const fetchProductsError = (error) => ({
    type: FETCH_PRODUCTS_ERROR,
    payload: error,
  });

  export const fetchProductDetailStart = () => ({
    type: FETCH_PRODUCT_DETAIL_START
  });
  
  export const fetchProductDetailSuccess = (product) => ({
    type: FETCH_PRODUCT_DETAIL_SUCCESS,
    payload: product
  });
  
  export const fetchProductDetailError = (error) => ({
    type: FETCH_PRODUCT_DETAIL_ERROR,
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

  export const fetchProducts = () => async (dispatch) => {
    dispatch(fetchProductsStart());
    try {
      const response = await axiosInstance.get('/products');
      dispatch(fetchProductsSuccess(response.data));
    } catch (error) {
      dispatch(fetchProductsError(error.message));
    }
  };

  export const fetchProductDetail = (productId) => {
    return async (dispatch) => {
      dispatch(fetchProductDetailStart());
      try {
        const response = await axiosInstance.get(`/products/${productId}`);
        dispatch(fetchProductDetailSuccess(response.data));
      } catch (error) {
        dispatch(fetchProductDetailError(error.message));
      }
    };
  };