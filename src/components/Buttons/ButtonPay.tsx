import { Link } from 'react-router-dom'
import { Button } from '@mui/material'

export const ButtonPay = () => {
	return (
		<Button variant="contained" fullWidth sx={{ padding: 1.5, marginTop: 10 }}>
			<Link
				to={'/pay'}
				style={{ color: 'white', fontWeight: 'bold', textDecoration: 'none' }}
			>
				PAGAR
			</Link>
		</Button>
	)
}
