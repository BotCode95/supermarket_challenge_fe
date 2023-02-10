import { Grid, TextField } from '@mui/material'
import { useForm } from '../../hooks/useForm'

export const Client = () => {
	const { state: nameClient, handleChange } = useForm()
	return (
		<Grid className="container_flex">
			<label style={{ paddingRight: 20 }}>Nombre Cliente:</label>
			<TextField
				id="text"
				variant="outlined"
				type="text"
				name="nameClient"
				onChange={handleChange}
				margin={'dense'}
				value={nameClient}
			/>
		</Grid>
	)
}
