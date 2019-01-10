import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { Button, Col, Form, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import InputField from '../InputFields/TextInput';
import Progress from '../../Progress';

const validate = (values) => {
	const errors = {};

	if (!values.username) {
		errors.username = 'Please enter your username';
	} else if (!/^[A-Z0-9_-]{2,15}$/i.test(values.username)) {
		errors.username = 'Invalid username';
	}
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
	if (!values.confirm_password) {
		errors.confirm_password = 'Please confirm your password';
	} else if (values.password !== values.confirm_password) {
		errors.confirm_password = 'Password mismatch';
	}
	return errors;
};
const RegisterForm = (props) => {
	const {handleSubmit, submitting, formLoading, pristine} = props;
	return (
		<Form onSubmit={handleSubmit}>
			<InputGroup className="mb-3">
				<InputGroupAddon addonType="prepend">
					<InputGroupText>
						<i className="fa fa-envelope"/>
					</InputGroupText>
				</InputGroupAddon>
				<Field name="email" type="email"
				       disabled={formLoading}
				       component={InputField} placeholder="name@example.com"/>
			</InputGroup>
			<InputGroup className="mb-3">
				<InputGroupAddon addonType="prepend">
					<InputGroupText>
						<i className="fa fa-user"/>
					</InputGroupText>
				</InputGroupAddon>
				<Field name="username" type="text"
				       disabled={formLoading}
				       component={InputField} placeholder="Username"/>
			</InputGroup>
			<InputGroup className="mb-4">
				<InputGroupAddon addonType="prepend">
					<InputGroupText>
						<i className="fa fa-lock"/>
					</InputGroupText>
				</InputGroupAddon>
				<Field name="password" type="password"
				       disabled={formLoading}
				       component={InputField} placeholder="Your Password"/>
			</InputGroup>
			<InputGroup className="mb-4">
				<InputGroupAddon addonType="prepend">
					<InputGroupText>
						<i className="fa fa-lock"/>
					</InputGroupText>
				</InputGroupAddon>
				<Field name="confirm_password" type="password"
				       disabled={formLoading}
				       component={InputField} placeholder="Confirm Password"/>
			</InputGroup>
			<Row>
				<Col xs="6">
					<Button color="primary" disabled={formLoading || submitting || pristine}
					        className="btn-block px-4">{formLoading ? <Progress/> : 'Login'}</Button>
				</Col>
			</Row>
		</Form>
	);
};

export default (reduxForm({
	// a unique name for the form
	form: 'registerForm',
	validate
})(RegisterForm));
