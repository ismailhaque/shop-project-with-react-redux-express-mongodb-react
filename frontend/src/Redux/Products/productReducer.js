// product reducer
import { ADDED_PRODUCT, DELETE_PRODUCT, GET_SINGLE_PRODUCT, PRODUCT_FAIL, PRODUCT_REQUEST, PRODUCT_SUCCESS } from "./actionType.js";
import initialState from "./initialState.js";

const productReducer = (state = initialState, {type, payload}) => {

    switch (type) {
        case PRODUCT_REQUEST:
            return {
                ...state,
                skliton : true
            }

        case PRODUCT_SUCCESS:
            return {
                ...state,
                skliton : false,
                products : payload
            }

        case PRODUCT_FAIL:
            return {
                ...state,
                skliton : false,
                error : payload
            }

        case GET_SINGLE_PRODUCT:
            return {
                ...state,
                getSingleProduct : state.products.find(data => data._id === payload )
            }

        case DELETE_PRODUCT:
            return {
                ...state,
                products : state.products.filter(data => data._id !== payload )
            }

        case ADDED_PRODUCT:
            return {
                ...state,
                products : [...state.products, payload]
            }
    
        default:
            return state
    }
}

// export product reducer
export default productReducer;