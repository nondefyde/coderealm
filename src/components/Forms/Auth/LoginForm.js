import React from 'react';
import { reduxForm } from 'redux-form';

const validate = (values) => {
	const errors = {};
	if (!values.email) {
		errors.email = 'Please enter your email';
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		errors.email = 'Invalid email address';
	}
	if (!values.password) {
		errors.password = 'Please enter your password';
	} else if (values.password.length < 6) {
		errors.password = 'Password should be 6+ characters';
	}
	return errors;
};
const LoginForm = (props) => {
	const {handleSubmit} = props;
	return (
		<form className="form" onSubmit={handleSubmit}>
			<h1>Login</h1>
			<p className="text-muted">Sign In to your account</p>
		</form>
	);
};

export default (reduxForm({
	// a unique name for the form
	form: 'loginForm',
	validate
})(LoginForm));
