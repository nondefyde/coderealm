import React from 'react';
import HomeComponent from './containers/Home/Home';

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
	{path: '/', exact: true, name: 'Home', component: HomeComponent},
];

export default routes;
