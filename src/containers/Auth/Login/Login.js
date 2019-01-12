import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, Card, CardBody, Alert, CardGroup, Col, Container, FormText, Row } from 'reactstrap';
import { login } from '../../../redux/actions';
import authService from '../../../services/auth';
import LoginForm from '../../../components/Forms/Auth/LoginForm'
import '../Auth.scss';

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
