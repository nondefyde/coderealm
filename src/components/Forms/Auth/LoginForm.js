import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button, Col, Form, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import InputField from '../InputFields/TextInput';
import Progress from '../../Progress';

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
	const {handleSubmit, submitting, formLoading, pristine} = props;
	return (
		<Form onSubmit={handleSubmit}>
			<InputGroup className="mb-3">
				<InputGroupAddon addonType="prepend">
					<InputGroupText>
						<i className="fa fa-user"/>
					</InputGroupText>
				</InputGroupAddon>
				<Field name="email" type="email"
				       disabled={formLoading}
				       component={InputField} placeholder="johndoe@example.com"/>
			</InputGroup>
			<InputGroup className="mb-4">
				<InputGroupAddon addonType="prepend">
					<InputGroupText>
						<i className="fa fa-lock"/>
					</InputGroupText>
				</InputGroupAddon>
				<Field name="password" type="password"
				       disabled={formLoading}
				       component={InputField} placeholder="Password"/>
			</InputGroup>
			<Row>
				<Col xs="6">
					<Button color="primary" disabled={formLoading || submitting }
					        className="btn-block px-4">{formLoading ? <Progress/> : 'Login'}</Button>
				</Col>
				<Col xs="6" className="text-right">
					<Link to="/reset" color="link" className="px-0">Forgot password?</Link>
				</Col>
			</Row>
		</Form>
	);
};

export default (reduxForm({
	// a unique name for the form
	form: 'loginForm',
	validate
})(LoginForm));
