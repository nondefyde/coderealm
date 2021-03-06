import React, { Component, Fragment } from 'react';
import 'react-app-polyfill/ie9'; // For IE 9-11 support
import 'react-app-polyfill/ie11'; // For IE 11 support
import './polyfill'
import './App.scss';
import { Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import Route from './components/Route/Route';
import HomeComponent from './containers/Home/Home';
import { history } from './redux/store';
import LoginComponent from './containers/Auth/Login/Login';
import RegisterComponent from './containers/Auth/Register/Register';
import ResetComponent from './containers/Auth/Reset/Reset';

export default class App extends Component {
	render() {
		return (
			<Fragment>
				<ConnectedRouter history={history}>
					<Switch>
						<Route exact path="/" name="Home" component={HomeComponent}/>
						<Route exact path="/login" name="Login" component={LoginComponent}/>
						<Route exact path="/register" name="Register" component={RegisterComponent}/>
						<Route exact path="/reset" name="Reset" component={ResetComponent}/>
					</Switch>
				</ConnectedRouter>
			</Fragment>
		)
	}
}
