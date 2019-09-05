import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';
import authService from '../../services/auth';
import './Home.scss';
import { Footer, Header, HomeCard, HomeCategory, Search } from '../../components/Partials';

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
				<Container className="home-container">
					<Row className="home-container__row">
						<Col className="home-container__search">
							<Search/>
						</Col>
					</Row>
					<Row className="home-container__content-row">
						<Col className="home-container__side-menu">
							<HomeCategory category={"React"}/>
						</Col>
						<Col className="home-container__contents">
							<HomeCard
								title={"Card title"}
								text={"Some quick example text to build on the card title and make up the bulk of the card's content."}
								image={"https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"}
							/>
							
							<HomeCard
								title={"Card title"}
								text={"Some quick example text to build on the card title and make up the bulk of the card's content."}
								image={"https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"}
							/>
						</Col>
					</Row>
				</Container>
				<Footer/>
			</div>
		)
	}
}

export default HomeComponent;
