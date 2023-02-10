import { Product } from '../../types'
import { ProductsState } from './ProductsProvider'

type ProductsActionType = 
| {type: 'GET_PRODUCTS_BY_USER', payload: Product[]}
| {type: 'CREATE_PRODUCT', payload: Product}
| {type: 'ERROR', payload: string}
| {type: 'CLEAN_ERROR', payload: string}


export const productsReducer = (state: ProductsState, action: ProductsActionType): ProductsState => {
   switch (action.type) {
   case 'GET_PRODUCTS_BY_USER':
       return {
           ...state,
           products: action.payload
       }
   case 'CREATE_PRODUCT':
       return {
           ...state,
           products: [...state.products, action.payload ]
       }
    case 'ERROR':
        return {
            ...state,
            message_error: action.payload
        }
    case 'CLEAN_ERROR':
        return{
            ...state,
            message_error: ''
        }
   default:
       return state
   }
}