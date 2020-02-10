import React, { FC } from 'react';
import { Switch } from 'react-router-dom';
import Login from '../features/auth/Login';

// Layouts
import AuthLayout from '../layouts/auth/AuthLayout';

// Components
import CustomRoute from './CustomRoute';

const Test: FC = () => <div>Test</div>;

const Routes: FC = () => (
	<Switch>
		<CustomRoute
			exact
			layout={AuthLayout}
			renderComponent={Test}
			path="/"
		/>
		<CustomRoute
			layout={AuthLayout}
			path="/login"
			renderComponent={Login}
		/>
	</Switch>
);

export default Routes;
