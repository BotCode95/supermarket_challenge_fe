import { createContext } from 'react'
import { Login, StatusToken, User } from '../../types'

interface ContextProps {
	token: string
	user: User | null
	status: StatusToken
	message: string
	login: (user: Login) => Promise<void>
	logout: () => void
	getToken: () => Promise<void>
}

export const AuthContext = createContext({} as ContextProps)
