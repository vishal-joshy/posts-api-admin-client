import React, { useState } from 'react';
import axios from 'axios';

function UserLoginForm() {
	const [credentials, setCredentials] = useState({ username: '', password: '' });

	const handleFormSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post('http://localhost:8080/api/user/login', credentials);
			localStorage.setItem('token',response.data.token);
		} catch (err) {
			console.log(err);
		}

		console.log(credentials);
	};
	const handleChange = (e) => {
		if (e.target.id === 'username') {
			setCredentials({ ...credentials, username: e.target.value });
		} else {
			setCredentials({ ...credentials, password: e.target.value });
		}
	};

	return (
		<div>
			<form
				onSubmit={(e) => {
					handleFormSubmit(e);
				}}>
				<input
					type='text'
					placeholder='username'
					id='username'
					onChange={(e) => {
						handleChange(e);
					}}
				/>
				<input
					type='passowrd'
					placeholder='password'
					id='password'
					onChange={(e) => {
						handleChange(e);
					}}
				/>
				<input type='submit' value='Login' />
			</form>
		</div>
	);
}

export default UserLoginForm;
