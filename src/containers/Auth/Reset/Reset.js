import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, Card, CardBody, CardGroup, Col, Container, FormText, Row } from 'reactstrap';
import ResetForm from '../../../components/Forms/Auth/ResetForm';
import '../Auth.scss';


class ResetComponent extends Component {

	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount() {
	}

	handleSubmit(values) {
		console.log('values : ', values);
	}

	render() {

		return (
			<div className="">
				<Container className="main">
					<Row className="justify-content-center">
						<Col md="6">
							<h1 className="text-center">Code Realm</h1>
							<CardGroup className="main-content">
								<Card className="p-4">
									<CardBody>
										<h1>Reset</h1>
										<p className="text-muted">Reset your password</p>
										<ResetForm onSubmit={this.handleSubmit}/>
										<FormText color="muted" className="mt-5 text-center"
										          style={{'font-size': '15px'}}>
											Don't have an account? <Link to="/register">Register</Link>
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

export default connect(null, dispatchProps)(ResetComponent);
