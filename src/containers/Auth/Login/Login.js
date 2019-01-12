import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, Card, CardBody, Alert, CardGroup, Col, Container, FormText, Row } from 'reactstrap';
import { login } from '../../../redux/actions';
import authService from '../../../services/auth';
import LoginForm from '../../../components/Forms/Auth/LoginForm'
import '../Auth.scss';
import AppSocialButton from '../../../components/Forms/InputFields/Button/SocialButton';

const propTypes = {
	isLoggingIn: PropTypes.bool,
	login: PropTypes.func.isRequired,
};

const defaultProps = {
	isLoggingIn: false,
};

const data = {
	email: "ekaruztest@gmail.com",
	password: "password"
};

class LoginComponent extends Component {

	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount() {
		authService.clearUserData();
	}

	handleSubmit(values) {
		const {login} = this.props;
		login(values);
	}

	handleSocialLogin(values) {
		console.log('social values ', values);
	}

	handleSocialLoginFailure(values) {
		console.log('social values ', values);
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
										<h1>Login</h1>
										<p className="text-muted">Sign In to your account</p>
										{error && <Alert color="danger">
											{error}
										</Alert>}
										<Row className="mb-3 mr-0">
											<Col md="6" className="pr-0">
												<AppSocialButton
													provider='facebook'
													appId='1995581460523595'
													onLoginSuccess={this.handleSocialLogin}
													onLoginFailure={this.handleSocialLoginFailure}
													color="primary" className="btn-block">
													<i className="fa fa-facebook"> </i> Facebook
												</AppSocialButton>
											</Col>
											<Col md="6" className="pr-0">
												<AppSocialButton
													provider='google'
													appId='566462880381-7tig94gmc9h2ijo1am8v872hq5t7u5sg.apps.googleusercontent.com'
													onLoginSuccess={this.handleSocialLogin}
													onLoginFailure={this.handleSocialLoginFailure}
													color="danger" className="btn-block">
													<i className="fa fa-google"> </i> Google
												</AppSocialButton>
											</Col>
										</Row>
										<LoginForm initialValues={data}
										           onSubmit={this.handleSubmit} formLoading={isLoggingIn}/>
										<FormText color="muted" className="mt-5 text-center"
										          style={{fontSize: '15px'}}>
											Don't have an account? <Link to="/register">Register Now!</Link>
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

LoginComponent.propTypes = propTypes;
LoginComponent.defaultProps = defaultProps;

const stateProps = (state) => ({
	isLoggingIn: state.ui.loading['login'],
	error: state.ui.errors['login']
});
const dispatchProps = {
	login,
};
export default connect(stateProps, dispatchProps)(LoginComponent);
