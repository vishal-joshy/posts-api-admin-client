import React, { useState } from 'react';

function UserSignUpForm() {
	const [credentials, setCredentials] = useState({ username: '', password: '' });
	console.log('SignUp component');

	const handleFormSubmit = (e) => {
		e.preventDefault();
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
				<input type='submit' value='Sign Up' />
			</form>
		</div>
	);
}

export default UserSignUpForm;
