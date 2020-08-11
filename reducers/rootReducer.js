import {combineReducers} from 'redux';
import {productList,cartCount} from './productGridReducer.js'

const reducers = {
    productList,
    cartCount
}

const rootReducer = combineReducers(reducers)

export default rootReducer