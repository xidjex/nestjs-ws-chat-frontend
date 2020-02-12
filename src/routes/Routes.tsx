import React, { FC } from 'react';
import { Switch } from 'react-router-dom';

// Layouts
import AuthLayout from '../layouts/auth/AuthLayout';

// Features
import Login from '../features/auth/Login';
import PrivateRoute from './PrivateRoute';

// Components
import Route from './Route';
import useRedirectAuthenticated from './useRedirectAuthenticated';

const Test: FC = () => (<div>Test</div>);

export const routes = {
	login: '/login',
	home: '/',
};

const Routes: FC = () => {
	useRedirectAuthenticated(routes.home);

	return (
		<Switch>
			<PrivateRoute
				exact
				layout={AuthLayout}
				renderComponent={Test}
				path={routes.home}
			/>
			<Route
				layout={AuthLayout}
				path={routes.home}
				renderComponent={Login}
			/>
		</Switch>
	);
};

export default Routes;
