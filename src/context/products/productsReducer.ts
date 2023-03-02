import { Product } from '../../types'
import { ProductsState } from './ProductsProvider'

type ProductsActionType = 
| {type: 'GET_PRODUCTS_BY_USER', payload: Product[]}
| {type: 'CREATE_PRODUCT', payload: Product}
| {type: 'ADD_CART', payload: Product}
| {type: 'UPDATE_CART', payload: {product: Product, total: number}}
| {type: 'ERROR', payload: string}
| {type: 'CLEAN_ERROR', payload: string}
| {type: 'SET_SUBTOTAL', payload: number}


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
    case 'ADD_CART' :
        return{
            ...state,
            cart: [...state.cart, action.payload],
            subtotal: state.cart.length > 0 ? state.cart.map(product => product.total).reduce((total, acc) => total + acc) : action.payload.total
        }
    case 'UPDATE_CART' :
        return{
            ...state,
            cart: state.cart.filter(product => {
                if(product._id === action.payload.product._id){
                    return action.payload.product
                }
                return product
            }),
            
            subtotal: action.payload.total
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
    case 'SET_SUBTOTAL':
        return {
            ...state,
            subtotal: state.cart.map(product => product.total).reduce((total, acc) => total + acc)
        }
   default:
       return state
   }
}