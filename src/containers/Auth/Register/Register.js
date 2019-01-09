import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, Card, CardBody, CardGroup, Col, Container, FormText, Row } from 'reactstrap';
import RegisterForm from '../../../components/Forms/Auth/RegisterForm';
import '../Auth.scss';


class RegisterComponent extends Component {

	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount() {
	}

	handleSubmit(values) {
		// const {register} = this.props;
		// register(values);
		console.log('values : ', values);
	}

	render() {
		const {isLoggingIn} = this.props;
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
										<Row className="mb-3 mr-0">
											<Col md="6" className="pr-0">
												<Button color="primary" block="true">
													<i className="fa fa-facebook"> </i> Facebook
												</Button>
											</Col>
											<Col md="6" className="pr-0">
												<Button color="danger" block="true">
													<i className="fa fa-google"> </i> Google
												</Button>
											</Col>
										</Row>
										<RegisterForm onSubmit={this.handleSubmit}/>
										<FormText color="muted" className="mt-5 text-center"
										          style={{'font-size': '15px'}}>
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

const dispatchProps = {
};

export default connect(null, dispatchProps)(RegisterComponent);
