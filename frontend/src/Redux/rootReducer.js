import { combineReducers } from 'redux'
import productReducer from './Products/productReducer.js'

// combine reducer
const rootReducer = combineReducers({

    products: productReducer

})

// export root reducer
export default rootReducer;