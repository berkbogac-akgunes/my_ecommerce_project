import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import logger from "redux-logger";
import { thunk } from "redux-thunk";
import { clientReducer } from "./reducers/clientRecuder";
import { productReducer } from "./reducers/productReducer";
import shoppingCartReducer from "./reducers/shoppingCardReducer";

const reducers = combineReducers({
    client: clientReducer,
    products: productReducer,
    shoppingCart: shoppingCartReducer,
  });

export const store = createStore(reducers, applyMiddleware(thunk, logger))