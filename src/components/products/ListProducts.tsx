import { useContext } from 'react'
import { ProductsContext } from '../../context/products'
import { Product } from './Product'
import { Typography } from '@mui/material'

export const ListProducts = () => {
	const { products } = useContext(ProductsContext)

	return (
		<>
			<Typography title="Listado de Productos" variant="h1" color={'black'}>
				Listado de Productos
			</Typography>

			{products && (
				<div>
					{products.map((product) => (
						<Product key={product._id} product={product} />
					))}
				</div>
			)}
		</>
	)
}
