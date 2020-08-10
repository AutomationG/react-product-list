import {combineReducers} from 'redux';
import {productList} from './productGridReducer.js'

const reducers = {
    productList
}

const rootReducer = combineReducers(reducers)

export default rootReducer