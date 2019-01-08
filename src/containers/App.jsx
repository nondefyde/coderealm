import React, { Component, Fragment } from 'react';
import { Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import Route from '../components/Route/Route';
import HomeComponent from './Home/Home';
import { history } from '../redux/store';
import LoginComponent from './Auth/Login/Login';
import RegisterComponent from './Auth/Register/Register';

export default class App extends Component {
	render() {
		return (
			<Fragment>
				<ConnectedRouter history={history}>
					<Switch>
						<Route path="/" name="Home" component={HomeComponent}/>
						<Route path="/login" name="Login" component={LoginComponent}/>
						<Route path="/register" name="Register" component={RegisterComponent}/>
					</Switch>
				</ConnectedRouter>
			</Fragment>
		)
	}
}
