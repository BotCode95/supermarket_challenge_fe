import { Button, Divider, Grid } from '@mui/material'
import React, { useContext, useEffect } from 'react'
import { ListProducts } from '../components/products/ListProducts'
import { AuthContext } from '../context/Auth/AuthContext'
import { ProductsContext } from '../context/products'
import { Moneda } from '../components/Moneda/Moneda'
import { ButtonPay } from '../components/Buttons/ButtonPay'
import { Cupon } from '../components/Cupon/Cupon'
import { Client } from '../components/Client/Client'

export const Home = () => {
	const { user } = useContext(AuthContext)
	const { logout } = useContext(AuthContext)
	const { subtotal, getProductsByUser } = useContext(ProductsContext)

	useEffect(() => {
		getProductsByUser(user!._id)
	}, [])
	return (
		<Grid container>
			<Grid item xs={7}>
				<ListProducts />
			</Grid>
			<Grid item xs={1}>
				<Divider orientation="vertical" />
			</Grid>

			<Grid item xs={4} className="prices_container">
				<Client />
				<Divider />
				<Moneda value={subtotal} title={'Subtotal'} />
				<Divider />
				<Cupon />
				<Moneda value={800} title={'Total'} />
				<Divider />
				<ButtonPay />
			</Grid>
			<Button
				variant="outlined"
				onClick={() => logout()}
				style={{ margin: 10 }}
			>
				{' '}
				Logout
			</Button>
		</Grid>
	)
}
