import { combineReducers } from "redux";
//Reducers
import { cartReducer } from "./cartReducers";
import { getProductsReducer, getProductDetailReducer } from "./productReducers";



export const rootReducer = combineReducers({
    cart: cartReducer,
    getProducts: getProductsReducer,
    getProductDetails: getProductDetailReducer 
});