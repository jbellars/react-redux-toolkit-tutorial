import React from 'react'
// The useDispatch hook is used to modify the values of our states
import { useDispatch } from 'react-redux'
import { login, logout } from '../features/user'

function Login() {
	const dispatch = useDispatch()

	return (
		<p>
			<button
				onClick={() => {
					dispatch(login({ name: 'Pedro', age: 20, email: 'pedro@gmail.com' }))
				}}
			>
				Login
			</button>

			<button
				onClick={() => {
					dispatch(logout())
				}}
			>
				LOGOUT
			</button>
		</p>
	)
}

export default Login
