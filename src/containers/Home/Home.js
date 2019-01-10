import React, { Component } from 'react';
import { Collapse, Container, Nav, Navbar, NavbarToggler, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import authService from '../../services/auth';
import './Home.scss';

class HomeComponent extends Component {

	constructor(props) {
		super(props);
		this.state = {
			isOpen: false
		};
		this.toggle = this.toggle.bind(this);
	}

	componentDidMount() {
		const user = authService.getAuthenticatedUser();
		console.log('user >>>>>>>> : ', user);
	}

	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}

	render() {
		return (
			<div>
				<Navbar color="light" light expand="md">
					<Link to="/" className="nav-link brand-name">Code Realm</Link>
					<NavbarToggler onClick={this.toggle}/>
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="ml-auto" navbar>
							<NavItem>
								<Link to="/register" className="nav-link">Register</Link>
							</NavItem>
							<NavItem>
								<Link to="/login" className="nav-link">Login</Link>
							</NavItem>
						</Nav>
					</Collapse>
				</Navbar>

				<Container className="home-container"/>
			</div>
		)
	}
}

export default HomeComponent;
