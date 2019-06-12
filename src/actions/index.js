import {UPDATE_PRODUCTS } from './type'
import {products} from '../product-list'


export const updateProd = (userDetails,id) => dispatch => {
  console.log("update action called",userDetails,id);
  const tempMyObj = Object.assign({}, products)
  tempMyObj[id] = userDetails;  
       return (
            dispatch({
              type: UPDATE_PRODUCTS,
              payload:tempMyObj
            })
          );
     
};