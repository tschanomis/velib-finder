import React from 'react';
import axios from 'axios';

const Login = () => {

	const handleSubmit= (e) => {
		e.preventDefault();
		axios.post("http://localhost:4000/auth/login", {
			email: e.target.name.email,
			password: e.target.name.password
		}).then(res => {
			console.log(res);
		})
	}

	return (
		<div className="Login">
			<form onSubmit={handleSubmit}>
				<input type="email" name="email" placeholder="email" required/>
				<input type="password" name="password" placeholder="password" required/>
				<button type="submit">Login</button>
			</form>
		</div>
	);
}

export default Login;
