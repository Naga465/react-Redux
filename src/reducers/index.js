import {combineReducers} from 'redux';
import productReducer from './productReducer'


export const allReducer =  combineReducers({
    prod: productReducer
});

