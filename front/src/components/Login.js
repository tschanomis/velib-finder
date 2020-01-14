import React from 'react';
import axios from 'axios';

import './Login.css'

class Login extends React.Component {
	state = {
	
	}

	handleSubmit = (e) => {
		e.preventDefault();
		axios.post("http://localhost:4000/auth/signin", {
			email: e.target.email.value,
			password: e.target.password.value
		}).then(res => {
			this.props.log()
		})
	}

	render() {
		return (
			<div className="container">
				<form onSubmit={this.handleSubmit}>
					<input type="email" name="email" placeholder="email" required />
					<input type="password" name="password" placeholder="password" required />
					<button type="submit">Login</button>
				</form>
			</div>
		)
	}
}

export default Login;
