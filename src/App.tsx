import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { AuthState } from './context/Auth/AuthState'
import { ProductsProvider } from './context/products'
import { Login } from './pages/Login'
import { ProtectedRoute } from './components/PrivateRoute/ProtectedRoute'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import { Pay } from './pages/Pay'

const theme = createTheme({
	typography: {
		fontFamily: [
			'-apple-system',
			'BlinkMacSystemFont',
			'"Segoe UI"',
			'Roboto',
			'"Helvetica Neue"',
			'Arial',
			'sans-serif',
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(','),
	},
})
function App() {
	return (
		<div>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<AuthState>
					<ProductsProvider>
						<BrowserRouter>
							<Routes>
								<Route
									path="/"
									element={<ProtectedRoute redirectTo="/login" />}
								>
									<Route path="/" element={<Home />} />
									<Route path="/pay" element={<Pay />} />
								</Route>
								<Route path="/login" element={<Login />} />
							</Routes>
						</BrowserRouter>
					</ProductsProvider>
				</AuthState>
			</ThemeProvider>
		</div>
	)
}

export default App
