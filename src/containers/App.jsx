import React, { Component, Fragment } from 'react';
import { Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import Route from '../components/Route/Route';
import HomeComponent from './Home/Home';
import { history } from '../redux/store';

export default class App extends Component {
	render() {
		return (
			<Fragment>
				<ConnectedRouter history={history}>
					<Switch>
						<Route path="/" name="Home" component={HomeComponent}/>
					</Switch>
				</ConnectedRouter>
			</Fragment>
		)
	}
}
