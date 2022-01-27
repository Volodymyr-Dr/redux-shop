import * as actionTypes from '../types/productTypes';

export const getProductsReducer = (state = { products: [] }, action) => {
    switch(action.type) {
        
        default: 
            return state;
    }
};

export const getProductDetailReducer = (state = { product: {}}, action) => {
    switch(action.type) {

        default:
            return state;
    }
}