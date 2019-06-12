import {UPDATE_PRODUCTS } from '../actions/type'
import { products} from '../product-list'


const initialstate =  {
    prodData :products,
    upProdData :[]
}

export default function(state = initialstate , action){
    console.log("reducer flow");
    switch(action.type){
        case UPDATE_PRODUCTS :
            return {
                ...state,
                upProdData : action.payload
            }
        default:
            return state;
    }
}