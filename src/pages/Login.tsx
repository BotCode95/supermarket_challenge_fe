import {
	ChangeEvent,
	ChangeEventHandler,
	FormEvent,
	useContext,
	useEffect,
	useState,
} from 'react'
import { useNavigate } from 'react-router-dom'
import { Login as LoginType } from '../types'
import { AuthContext } from '../context/Auth/AuthContext'
import { Button, TextField, Typography } from '@mui/material'

export const Login = () => {
	const [user, setUser] = useState<LoginType>({
		email: '',
		password: '',
	})

	const navigate = useNavigate()

	const { status, login } = useContext(AuthContext)
	const handleChange: ChangeEventHandler<HTMLInputElement> = (
		e: ChangeEvent<HTMLInputElement>
	) => {
		setUser({
			...user,
			[e.target.name]: e.target.value,
		})
	}

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		login(user)

		navigate('/')
	}

	useEffect(() => {
		if (localStorage.getItem('token') && status === 'authenticated')
			navigate('/')
	}, [status])
	return (
		<>
			<Typography
				title="Inicio de Sesión"
				variant="h2"
				className="container_flex "
			>
				Inicio de Sesión
			</Typography>
			<form
				onSubmit={handleSubmit}
				className="container_flex container_flex_column"
				style={{ marginTop: 50 }}
			>
				<label>Email:</label>
				<TextField
					id="email"
					variant="outlined"
					type="text"
					name="email"
					onChange={handleChange}
					margin={'dense'}
				/>
				<label>Password:</label>
				<TextField
					id="password"
					variant="outlined"
					type="password"
					name="password"
					onChange={handleChange}
					margin={'dense'}
				/>

				<Button
					type="submit"
					variant="contained"
					style={{ marginTop: 20, width: 200 }}
				>
					Login
				</Button>
			</form>
		</>
	)
}
