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
			username: ''
		};
		this.toggle = this.toggle.bind(this);
	}

	componentDidMount() {
		const user = authService.getAuthenticatedUser();
		this.setState({
			username: user.username
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
					username={this.state.username}
					isloggedIn={authService.isLoggedIn()}
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
