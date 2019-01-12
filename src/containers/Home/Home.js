import React, { Component } from 'react';
import { Container } from 'reactstrap';
import authService from '../../services/auth';
import './Home.scss';
import Header from '../../components/Header/Header';

class HomeComponent extends Component {

	constructor(props) {
		super(props);
		this.state = {
			isOpen: false,
			email: ''
		};
		this.toggle = this.toggle.bind(this);
	}

	componentDidMount() {
		const user = authService.getAuthenticatedUser();
		this.setState({
			email: user.email
		})
	}

	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}

	render() {
		return (
			<div>
				<Header
					email={this.state.email}
					isLoggedIn={authService.isLoggedIn()}
					title="Code Realm"
					onClick={this.toggle}
					isOpen={this.state.isOpen}
				/>
				<Container className="home-container"/>
			</div>
		)
	}
}

export default HomeComponent;
