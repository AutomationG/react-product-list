import {combineReducers} from 'redux';
import {productList} from './productGridReducer.js'

const reducers = {
    productList
}

console.log(reducers)

const rootReducer = combineReducers(reducers)

export default rootReducer