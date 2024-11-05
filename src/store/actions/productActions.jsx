import { axiosInstance } from "@/helpers/axios"
import { toast } from "react-toastify"

export const SET_CATEGORIES = 'SET_CATEGORIES'
export const SET_PRODUCT_LIST = 'SET_PRODUCT_LIST'
export const SET_TOTAL = 'SET_TOTAL'
export const SET_FETCH_STATE = 'SET_FETCH_STATE'
export const SET_LIMIT = 'SET_LIMIT'
export const SET_OFFSET = 'SET_OFFSET'
export const SET_FILTER = 'SET_FILTER'
export const SET_SORT = "SET_SORT"
export const SET_CATEGORY_ID = "SET_CATEGORY_ID"
export const SET_CATEGORY_NAME = "SET_CATEGORY_NAME"
export const SET_GENDER = "SET_GENDER"
export const RESET_FILTER = 'RESET_FILTER';
export const RESET_SORT = 'RESET_SORT';

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
export const resetFilter = () => ({
  type: RESET_FILTER,
});

export const resetSort = () => ({
  type: RESET_SORT,
});
export const setSort = (sort) => ({
  type: SET_SORT,
  payload: sort
});

export const setCategoryId = (categoryId) => ({
  type: SET_CATEGORY_ID,
  payload: categoryId
});

export const setCategoryName = (categoryName) => ({
  type: SET_CATEGORY_NAME,
  payload: categoryName
});

export const setGender = (gender) => ({
  type: SET_GENDER,
  payload: gender
});
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
        //do I need 2 of them?
        dispatch(setCategories(response.data));
        dispatch(fetchCategoriesSuccess(response.data));
      } catch (error) {
        dispatch(fetchCategoriesFailure(error.message));
      }
    };
  };

  //old fetch
  {/*export const fetchProducts = () => async (dispatch) => {
    dispatch(fetchProductsStart());
    try {
      const response = await axiosInstance.get('/products');
      dispatch(fetchProductsSuccess(response.data));
    } catch (error) {
      dispatch(fetchProductsError(error.message));
    }
  };*/}

  // Common pattern of resetting pagination and fetching products
const resetAndFetch = (actionCreator) => {
  return (...args) => {
    return (dispatch) => {
      dispatch(actionCreator(...args));
      dispatch(setOffset(0)); // Reset to first page
      dispatch(fetchProducts());
    };
  };
};

export const fetchProducts = (options = {}) => {
  return async (dispatch, getState) => {
    try {
      dispatch(fetchProductsStart());
      
      const { limit, offset, filter, sort, categoryId } = getState().products;
      const queryParams = new URLSearchParams();
      
      // Add base params
      queryParams.append('limit', limit);
      queryParams.append('offset', offset);
      
      // Add optional params if they exist
      const paramMap = {
        category: options.category || categoryId,
        filter: filter?.trim(),
        sort: sort.field && sort.order ? `${sort.field}:${sort.order}` : null
      };

      Object.entries(paramMap).forEach(([key, value]) => {
        if (value) queryParams.append(key, value);
      });

      console.log('URL:', `/products?${queryParams.toString()}`);
      
      const response = await axiosInstance.get(`/products?${queryParams.toString()}`);
      dispatch(fetchProductsSuccess(response.data));
      dispatch(setFetchState('FETCHED'));
      
    } catch (error) {
      dispatch(fetchProductsError(error.message));
      toast.error('Failed to fetch products');
    }
  };
};

export const handleCategory = (gender, categoryName, categoryId) => {
  return (dispatch) => {
    dispatch(setGender(gender));
    dispatch(setCategoryName(categoryName));
    dispatch(setCategoryId(categoryId));
    dispatch(fetchProducts({ category: categoryId }));
  };
};

//Page change handler
export const handlePageChange = (newPage) => {
  return (dispatch, getState) => {
    const { limit } = getState().products;
    dispatch(setOffset((newPage - 1) * limit));
    dispatch(fetchProducts());
  };
};

// Using resetAndFetch for common patterns
export const handleLimitChange = resetAndFetch(setLimit);
export const handleFilterChange = resetAndFetch(setFilter);
export const handleSearch = resetAndFetch(setFilter);

//Sort handler
export const handleSort = resetAndFetch((sortString) => {
  const [field, order] = sortString.split(':');
  return setSort({ field, order });
});

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