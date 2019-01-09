import React from 'react';
import { reduxForm, Field } from 'redux-form';
import renderField from './renderField';
import './style.scss';

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
	const { handleSubmit, submitting } = props
	return (
		<div 
			className="container-fluid d-flex flex-column 
			justify-content-center align-items-center
			container--height"
		>
			<h2 
				className="d-flex justify-content-center form-auth__title" 
			>
				Code Realm
			</h2>
	
			<form 
				className="form form-auth border"
				onSubmit={handleSubmit((value) => console.log('weee', value))}
			>

				<h5 className="mt-4">Log in</h5>
				<hr className="w-100 h-1" />
				<div className="form-group form-group--top d-flex">
					<button  
						className="btn flex-fill w-25 btn-primary"
					>
						Facebook
					</button>
					<button 
						className="btn border-right border-left flex-fill w-25  ml-1 disabled"
					>
						Email
					</button>
					<button 
						className="btn flex-fill w-25 btn-danger"
					>
						Google
					</button>
				</div>
				
				<Field 
					name="email" 
					component={renderField} 
					type="email"
					placeholder="Email"
				/>

				<Field 
					name="password" 
					component={renderField} 
					type="password" 
					placeholder="Password"
				/>
				
				<div className="form-group d-flex">
					<button 
						type="submit" 
						className="btn btn-primary flex-grow-1" 
						disabled={submitting}
					>
						Submit
					</button>
				</div>
			</form>
		</div>
	);
};

export default (reduxForm({
	// a unique name for the form
	form: 'loginForm',
	validate
})(LoginForm));
