import axios from "axios"
import swal from "sweetalert"
import { DELETE_PRODUCT, GET_SINGLE_PRODUCT, PRODUCT_FAIL, PRODUCT_REQUEST, PRODUCT_SUCCESS } from "./actionType.js"

// PRODUCT GET REQUEST
export const productRequest = () => {

    return {
        type: PRODUCT_REQUEST
    }

}

// PRODUCT GET SUCCESS
export const productSuccess = (payload) => {

    return {
        type: PRODUCT_SUCCESS,
        payload: payload
    }

}
// PRODUCT GET FAILED
export const productFail = (payload) => {

    return {
        type: PRODUCT_FAIL,
        payload: payload
    }

}


// get all product

export const getAllProduct = () => async (dispatch) => {

    try {

        dispatch(productRequest())

        await axios.get('/api/product/').then(res => {

            dispatch(productSuccess(res.data))

        }).catch(err => {

            dispatch(productFail(err.message))

        })

    } catch (error) {
        dispatch(productFail(error.message))
    }

}


// create product

export const createProduct = (data) => async (dispatch) => {

    try {

           await axios.post('/api/product/', data).then(res => {

                dispatch(getAllProduct(res.data))

                swal({
                    title: "Good job!",
                    text: "Product create success!",
                    icon: "success",
                    button: "Aww yiss!",
                })

            }).catch(err => {

                dispatch(productFail(err.message))

            })

    } catch (error) {
        dispatch(productFail(error.message))
    }

}

// get single product

export const singleProduct = (id) => async (dispatch) => {

    dispatch({
        type: GET_SINGLE_PRODUCT,
        payload: id
    })

}

// delete product

export const deleteProduct = (id) => async (dispatch) => {

    try {

           await axios.delete(`/api/product/${id}`).then(res => {

                dispatch({
                    type : DELETE_PRODUCT,
                    payload : id
                })

            }).catch(err => {

                dispatch(productFail(err.message))

            })

    } catch (error) {
        dispatch(productFail(error.message))
    }

}