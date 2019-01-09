import React, { Component } from 'react'
import { SubmissionError } from 'redux-form';

import LoginForm from '../../../components/Forms/Auth/LoginForm'


class LoginComponent extends Component {
	

	// login = (value) => console.log('weee', value); 

	render() {
		return (
			<LoginForm/>
		)
	}
};

export default LoginComponent
