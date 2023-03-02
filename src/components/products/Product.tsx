import {
	useState,
	useEffect,
	SelectHTMLAttributes,
	FormEvent,
	ChangeEvent,
} from 'react'
import { Product as ProductType } from '../../types'
import {
	Grid,
	MenuItem,
	Select,
	SelectChangeEvent,
	Typography,
} from '@mui/material'
import image_cupon from '../../assets/image_cupon.svg'
import { useContext } from 'react'
import { ProductsContext } from '../../context/products/ProductsContext'
interface Props {
	product: ProductType
}
export const Product = ({ product }: Props) => {
	const [stock, setStock] = useState<number[]>([])
	const [valueStock, setValueStock] = useState('')

	const { setSubtotal, shoppingCart } = useContext(ProductsContext)

	useEffect(() => {
		setStock(
			Array(product.stock)
				.fill(0, 0, product.stock)
				.map((i, index) => (i = index + 1))
		)
	}, [])

	const handleSelect = (e: SelectChangeEvent<string>) => {
		if (Number(e.target.value) > 3 && product.category.name) {
			const total = Number(3) * product.price_unit
			product.total = total
			shoppingCart(product)
			setValueStock('3')
			alert('El máximo seleccionable es 3')
			// setSubtotal(total)
			return //return void => no retorno nada
		}
		const total = Number(e.target.value) * product.price_unit
		product.total = total
		shoppingCart(product)
		setValueStock(e.target.value)
		// setSubtotal(Number(e.target.value) * product.price_unit)
	}
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
						<Select
							defaultValue={'0'}
							onChange={handleSelect}
							value={valueStock}
						>
							{stock.map((unidad) => (
								<MenuItem key={unidad} value={unidad}>
									{unidad}
								</MenuItem>
							))}
						</Select>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	)
}
