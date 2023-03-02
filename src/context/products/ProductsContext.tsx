import { createContext } from 'react'
import { Product } from '../../types'

export interface ContextProps {
	products: Product[]
	product: Product | null
	cart: Product[]
	message_error: string
	subtotal: number
	getProductsByUser: (idUser: string) => Promise<void>
	createProduct: (product: Product) => Promise<void>
	errorMessage: (message: string) => void
	setSubtotal: (value: number) => void
	shoppingCart: (product: Product) => void
}

export const ProductsContext = createContext({} as ContextProps)
