import React from 'react'
// pull in the useSelector hook
// The useSelector hook is used for accessing the values of our states
import { RootStateOrAny, useSelector } from 'react-redux'

function Profile() {
	const user = useSelector((state: RootStateOrAny) => state.user.value)
	const themeColor = useSelector((state: RootStateOrAny) => state.theme.value)

	return (
		<div style={{ color: themeColor }}>
			<h1> Profile Page</h1>
			<p> Name: {user.name} </p>
			<p> Age: {user.age}</p>
			<p> Email: {user.email}</p>
		</div>
	)
}

export default Profile
