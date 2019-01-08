import React, { Component } from 'react'

import LoginForm from '../../../components/Forms/Auth/LoginForm'

class LoginComponent extends Component {

	login() {
	}

	render() {
		return (
			<LoginForm handleSubmit={this.login()}/>
		)
	}
};

export default LoginComponent
