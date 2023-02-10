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
	message_error: string
}

const Products_INITIAL_STATE: ProductsState = {
	products: [],
	product: null,
	message_error: '',
}

export const ProductsProvider: FC<Props> = ({ children }) => {
	const [state, dispatch] = useReducer(productsReducer, Products_INITIAL_STATE)

	const getProductsByUser = async (idUser: string) => {
		try {
			const { data } = await api.get(`/products?idUser=${idUser}`)

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
	return (
		<ProductsContext.Provider
			value={{
				...state,
				getProductsByUser,
				createProduct,
				errorMessage,
			}}
		>
			{children}
		</ProductsContext.Provider>
	)
}
