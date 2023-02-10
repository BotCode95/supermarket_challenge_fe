import { createContext } from 'react'
import { Product } from '../../types'

export interface ContextProps {
	products: Product[]
	product: Product | null
	message_error: string
	getProductsByUser: (idUser: string) => Promise<void>
	createProduct: (product: Product) => Promise<void>
	errorMessage: (message: string) => void
}

export const ProductsContext = createContext({} as ContextProps)
