import { Navigate, Outlet } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../context/Auth/AuthContext'

interface Props {
	redirectTo?: string
}

export const ProtectedRoute = ({ redirectTo = '/login' }: Props) => {
	const { status } = useContext(AuthContext)
	if (status !== 'authenticated') {
		return <Navigate to={redirectTo} />
	}
	return <Outlet />
}
