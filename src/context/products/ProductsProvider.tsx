import { FC, useReducer } from 'react'
import { ProductsContext, productsReducer } from './'
import { Product } from '../../types'
import api from '../../api'

interface Props {
	children: React.ReactNode
}
export interface ProductsState {
	products: Product[]
	product: Product | null
	cart: Product[]
	message_error: string
	subtotal: number
}

const Products_INITIAL_STATE: ProductsState = {
	products: [],
	cart: [],
	product: null,
	message_error: '',
	subtotal: 0,
}

export const ProductsProvider: FC<Props> = ({ children }) => {
	const [state, dispatch] = useReducer(productsReducer, Products_INITIAL_STATE)

	const getProductsByUser = async (idUser: string) => {
		try {
			const { data } = await api.get(`/products?idUser=${idUser}`)
			console.log(data)

			dispatch({
				type: 'GET_PRODUCTS_BY_USER',
				payload: data.products,
			})
		} catch (error: any) {
			errorMessage(error.message)
		}
	}
	const createProduct = async (product: Product) => {
		try {
			const { data } = await api.post('/products', product)

			dispatch({
				type: 'CREATE_PRODUCT',
				payload: product,
			})
		} catch (error: any) {
			errorMessage(error.message)
		}
	}

	const errorMessage = (message: string) => {
		dispatch({
			type: 'ERROR',
			payload: message,
		})
	}

	const setSubtotal = (value: number) => {
		dispatch({
			type: 'SET_SUBTOTAL',
			payload: value,
		})
	}

	const shoppingCart = (product: Product) => {
		if (state.cart.some((productFilter) => productFilter._id === product._id)) {
			dispatch({
				type: 'UPDATE_CART',
				payload: {
					product,
					total: state.subtotal + product.total,
				},
			})
		} else {
			dispatch({
				type: 'ADD_CART',
				payload: product,
			})
		}
		console.log(product)
	}
	return (
		<ProductsContext.Provider
			value={{
				...state,
				getProductsByUser,
				createProduct,
				errorMessage,
				setSubtotal,
				shoppingCart,
			}}
		>
			{children}
		</ProductsContext.Provider>
	)
}
