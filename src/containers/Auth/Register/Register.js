import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Alert, Card, CardBody, CardGroup, Col, Container, FormText, Row } from 'reactstrap';
import RegisterForm from '../../../components/Forms/Auth/RegisterForm';
import { register, social } from '../../../redux/actions';
import authService from '../../../services/auth';
import '../Auth.scss';
import AppSocialButton from '../../../components/Forms/InputFields/Button/SocialButton';

const propTypes = {
	isLoggingIn: PropTypes.bool,
	register: PropTypes.func.isRequired,
	social: PropTypes.func.isRequired,
};

const defaultProps = {
	isLoggingIn: false,
};

const data = {
	email: "",
	password: "",
	confirm_password: "",
	verify_redirect_url: process.env.VERIFY_REDIRECT_URL
};

class RegisterComponent extends Component {

	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleSocialLogin = this.handleSocialLogin.bind(this);
	}

	componentDidMount() {
		authService.clearUserData();
	}

	handleSocialLogin({_profile, _provider, _token}) {
		const {email, id} = _profile;
		const data = {email, social_id: id, _provider, access_token: _token.accessToken};
		const {social} = this.props;
		social(data);
	}

	handleSubmit(values) {
		const verify_redirect_url = process.env.verify_redirect_url;
		const regValues = {...values, verify_redirect_url};
		console.log('regValues : ', regValues);
		const {register} = this.props;
		// register(regValues);
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
	isLoggingIn: state.ui.loading['register'] || state.ui.loading['social'],
	error: state.ui.errors['register'] || state.ui.errors['social']
});

const dispatchProps = {
	register,
	social,
};

export default connect(stateProps, dispatchProps)(RegisterComponent);
