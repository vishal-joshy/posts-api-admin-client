import React, { useState } from "react";
import axios from "axios";

function UserLoginForm() {
	const [credentials, setCredentials] = useState({});

	const handleFormSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post("http://localhost:8080/api/user/login", credentials);
			sessionStorage.setItem("token", response.data.token);
			sessionStorage.setItem("username", credentials.username);
			window.location.assign("/");
		} catch (err) {
			console.log(err);
		}

		console.log(credentials);
	};
	const handleChange = (e) => {
		let newObj = {};
		newObj[e.target.id] = e.target.value;
		setCredentials({ ...credentials, ...newObj });
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
