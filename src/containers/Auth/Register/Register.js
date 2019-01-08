import React, { Component } from 'react'

import RegisterForm from '../../../components/Forms/Auth/RegisterForm'

class RegisterComponent extends Component {

	login() {
	}

	render() {
		return (
			<RegisterForm handleSubmit={this.login()}/>
		)
	}
};

export default RegisterComponent
