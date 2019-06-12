import {UPDATE_PRODUCTS } from './type'
import {products} from '../product-list'


export const updateProd = (userDetails,id) => dispatch => {
  console.log("update action called",userDetails,id);
  const tempMyObj = Array.from(products);
  tempMyObj[id] = userDetails;
  console.log(tempMyObj);
       return (
            dispatch({
              type: UPDATE_PRODUCTS,
              payload:tempMyObj
            })
          );
     
};