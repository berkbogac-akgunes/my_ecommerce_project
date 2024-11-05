import { SET_CATEGORIES, SET_PRODUCT_LIST, SET_TOTAL, SET_FETCH_STATE, SET_LIMIT, SET_OFFSET, SET_FILTER, FETCH_CATEGORIES_START, FETCH_CATEGORIES_SUCCESS, FETCH_CATEGORIES_FAILURE, FETCH_PRODUCTS_START, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_ERROR, FETCH_PRODUCT_DETAIL_START, FETCH_PRODUCT_DETAIL_SUCCESS, FETCH_PRODUCT_DETAIL_ERROR, SET_CATEGORY_ID, SET_CATEGORY_NAME, SET_GENDER, SET_SORT, RESET_FILTER, RESET_SORT } from "../actions/productActions";

const initialState = {
    categories: [],
    products: [],
    total: 0,
    limit: 25,
    offset: 0,
    filter: '',
    sort: {
      field: null,
      order: null
    },
    categoryId: null,
    categoryName: null,
    gender: null,
    fetchState: 'NOT_FETCHED',
    selectedProduct: null,
    loading: false,
    error: null,
  };

  {/*use later -> loading and errors */}
  export const productReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_CATEGORIES:
        return {
          ...state,
          categories: action.payload
        };
      case SET_CATEGORY_ID:
        return {
          ...state,
          categoryId: action.payload
        };
      case SET_CATEGORY_NAME:
        return {
          ...state,
          categoryName: action.payload
        };
      case SET_GENDER:
        return {
          ...state,
          gender: action.payload
        };
      case SET_SORT:
        return {
          ...state,
          sort: action.payload
        };
      case RESET_FILTER:
        return {
          ...state,
          filter: '',
        };
      case RESET_SORT:
        return {
          ...state,
          sort: { field: '', order: '' },
        };
      case SET_PRODUCT_LIST:
        return {
          ...state,
          productList: action.payload
        };
      case SET_TOTAL:
        return {
          ...state,
          total: action.payload
        };
      case SET_FETCH_STATE:
        return {
          ...state,
          fetchState: action.payload
        };
      case SET_LIMIT:
        return {
          ...state,
          limit: action.payload
        };
      case SET_OFFSET:
        return {
          ...state,
          offset: action.payload
        };
      case SET_FILTER:
        return {
          ...state,
          filter: action.payload
        };
      case FETCH_CATEGORIES_START:
        return { ...state, loading: true, error: null };
      case FETCH_CATEGORIES_SUCCESS:
        return { 
          ...state, 
          loading: false, 
          categories: action.payload,
          error: null 
        };
      case FETCH_CATEGORIES_FAILURE:
        return { 
          ...state, 
          loading: false, 
          error: action.payload 
        };
      case FETCH_PRODUCTS_START:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case FETCH_PRODUCTS_SUCCESS:
        return {
          ...state,
          loading: false,
          products: action.payload.products,
          total: action.payload.total,
          error: null,
        };
      case FETCH_PRODUCTS_ERROR:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case FETCH_PRODUCT_DETAIL_START:
        return {
          ...state,
          productDetailLoading: true,
          productDetailError: null
        };
      case FETCH_PRODUCT_DETAIL_SUCCESS:
        return {
          ...state,
          productDetailLoading: false,
          selectedProduct: action.payload
        };
      case FETCH_PRODUCT_DETAIL_ERROR:
        return {
          ...state,
          productDetailLoading: false,
          productDetailError: action.payload
        };
      default:
        return state;
    }
  };