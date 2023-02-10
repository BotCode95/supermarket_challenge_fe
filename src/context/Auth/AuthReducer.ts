import { User } from '../../types';
import { AuthState } from './AuthState'

type AuthActionType =
	| { type: 'LOGIN'; payload: { user: User; token: string} }
	| { type: 'LOGOUT' }

export const AuthReducer = (
	state: AuthState,
	action: AuthActionType
): AuthState => {
	switch (action.type) {
	case 'LOGIN':
		return {
			...state,
			user: action.payload.user,
			token: action.payload.token,
			status: 'authenticated',
		}

	case 'LOGOUT':
		return {
			...state,
			user: null,
			token: '',
			status: 'no-authenticated',
		}

	default:
		return state
	}
}
