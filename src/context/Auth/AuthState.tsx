import React, { useReducer, useEffect } from 'react'
import { AuthContext } from './AuthContext'
import { AuthReducer } from './AuthReducer'
import api from '../../api'
import { Login, StatusToken, User } from '../../types'

interface stateProps {
	children: React.ReactNode
}

export interface AuthState {
	token: string
	user: User | null
	status: StatusToken
	message: string
}

const INITIAL_STATE: AuthState = {
	token: '',
	user: null,
	status: 'checking',
	message: '',
}

export const AuthState = ({ children }: stateProps) => {
	const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE)

	useEffect(() => {
		getToken()
	}, [])

	const login = async (user: Login) => {
		const { data } = await api.post('/auth/login', user)

		try {
			dispatch({
				type: 'LOGIN',
				payload: {
					user: data.user,
					token: data.token,
				},
			})
			localStorage.setItem('token', data.token)
		} catch (error) {
			console.log(error)
		}
	}

	const logout = () => {
		localStorage.removeItem('token')
		dispatch({
			type: 'LOGOUT',
		})
	}
	const getToken = async () => {
		const token = localStorage.getItem('token')
		if (!token) return dispatch({ type: 'LOGOUT' })
		const resp = await api.get('/auth', { headers: { 'x-token': token } })
		if (resp.status !== 200) return dispatch({ type: 'LOGOUT' })
		localStorage.setItem('token', token)
		dispatch({
			type: 'LOGIN',
			payload: {
				user: resp.data.user,
				token: resp.data.token,
			},
		})
	}

	return (
		<AuthContext.Provider
			value={{
				...state,
				login,
				logout,
				getToken,
			}}
		>
			{children}
		</AuthContext.Provider>
	)
}
