import { Button, Grid, TextField } from '@mui/material'
import { useForm } from '../../hooks/useForm'

export const Cupon = () => {
	const { state: cupon, handleChange, handleSubmit } = useForm()
	return (
		<form onSubmit={handleSubmit} style={{ marginTop: 20 }}>
			<Grid container className="cupon_container">
				<Grid item xs={6} paddingLeft={2}>
					<TextField
						id="outlined-basic"
						variant="outlined"
						placeholder="Cupon"
						type="text"
						onChange={handleChange}
						name="cupon"
						value={cupon}
					/>
				</Grid>
				<Grid item xs={6} display={'flex'} justifyContent={'center'}>
					<Button type="submit" variant="contained" size="large">
						Aplicar
					</Button>
				</Grid>
			</Grid>
		</form>
	)
}
