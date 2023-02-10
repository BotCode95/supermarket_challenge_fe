import { useState, useEffect } from 'react'
import { Product as ProductType } from '../../types'
import { Grid, Select, Typography } from '@mui/material'
import image_cupon from '../../assets/image_cupon.svg'
interface Props {
	product: ProductType
}
export const Product = ({ product }: Props) => {
	const [stock, setStock] = useState<number[]>([])

	useEffect(() => {
		setStock(
			Array(product.stock)
				.fill(0, 0, product.stock)
				.map((i, index) => (i = index + 1))
		)
	}, [])
	return (
		<Grid container className="product_container">
			<Grid
				item
				xs={4}
				display={'flex'}
				justifyContent={'center'}
				alignItems={'center'}
			>
				<img src={image_cupon} width={150} />
			</Grid>
			<Grid item xs={8}>
				<Grid container>
					<Grid item xs={6}>
						<Typography variant="h6">{product.name} </Typography>
						<Typography variant="h6">Cat: {product.category.name}</Typography>
						<Typography variant="body1">
							Precio Unidad : $ {product.price_unit}
						</Typography>
					</Grid>
					<Grid
						item
						xs={4}
						display={'flex'}
						justifyContent={'flex-start'}
						alignItems={'center'}
						flexDirection={'column'}
					>
						<Typography variant="body1">Seleccione</Typography>
						<Select defaultValue={''}>
							{stock.map((unidad) => (
								<option key={unidad} value={unidad}>
									{unidad}
								</option>
							))}
						</Select>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	)
}
