import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Card, CardBody, Alert, 
	CardGroup, Col, Container, FormText, Row } from 'reactstrap';
import RegisterForm from '../../../components/Forms/Auth/RegisterForm';
import { register } from '../../../redux/actions';
import authService from '../../../services/auth';
import '../Auth.scss';

const propTypes = {
	isLoggingIn: PropTypes.bool,
	register: PropTypes.func.isRequired,
};

const defaultProps = {
	isLoggingIn: false,
};

const data = {
	email: process.env.default_email,
	username: process.env.default_username,
	password: process.env.default_password,
	confirm_password: process.env.default_change_password 
};

class RegisterComponent extends Component {

	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount() {
		authService.clearUserData();
	}

	handleSubmit(values) {
		const verify_redirect_url = process.env.verify_redirect_url;
		const regValues = { ...values, verify_redirect_url };
		const {register} = this.props;
		register(regValues);
	}

	render() {
		const {isLoggingIn, error} = this.props;

		return (
			<div className="">
				<Container className="main">
					<Row className="justify-content-center">
						<Col md="6">
							<h1 className="text-center">Code Realm</h1>
							<CardGroup className="main-content">
								<Card className="p-4">
									<CardBody>
										<h1>Register</h1>
										<p className="text-muted">Sign up for an account</p>
										{error && <Alert color="danger">
											{error}
										</Alert>}
										<Row className="mb-3 mr-0">
											<Col md="6" className="pr-0">
												<Button color="primary" className="btn-block">
													<i className="fa fa-facebook"> </i> Facebook
												</Button>
											</Col>
											<Col md="6" className="pr-0">
												<Button color="danger" className="btn-block">
													<i className="fa fa-google"> </i> Google
												</Button>
											</Col>
										</Row>
										<RegisterForm
											initialValues={data}
											onSubmit={this.handleSubmit}  
											formLoading={isLoggingIn} 
										/>
										<FormText color="muted" className="mt-5 text-center"
										          style={{fontSize: '15px'}}>
											Already have an account? <Link to="/login">Login Now!</Link>
										</FormText>
									</CardBody>
								</Card>
							</CardGroup>
						</Col>
					</Row>
				</Container>
			</div>
		)
	}
};


const stateProps = (state) => ({
	isLoggingIn: state.ui.loading['register'],
	error: state.ui.errors['register']
});

const dispatchProps = {
	register,
};

export default connect(stateProps, dispatchProps)(RegisterComponent);
