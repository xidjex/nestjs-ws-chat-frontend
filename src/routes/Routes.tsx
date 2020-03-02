import React, { FC, ReactElement } from 'react';
import { AnimatePresence } from 'framer-motion';
import {
	Switch,
	Route as DefaultRoute,
	Link,
} from 'react-router-dom';

// Pages
import Login from '../pages/auth/Login';


// Components
import Route from './Route';
import PrivateRoute from './PrivateRoute';
import AuthLayout from '../layouts/auth/AuthLayout';

// Utils
import useRedirectAuthenticated from './useRedirectAuthenticated';

const Test: FC = () => (
	<div>
Test
		<Link to="/">Link</Link>
	</div>
);

export const routes = {
	login: '/login',
	home: '/',
};

const Routes: FC = () => {
	useRedirectAuthenticated(routes.home);

	return (
		<DefaultRoute
			render={({ location }): ReactElement => (
				<AnimatePresence exitBeforeEnter initial={false}>
					<Switch location={location} key={location.pathname}>
						<PrivateRoute
							exact
							renderComponent={Test}
							path={routes.home}
						/>
						<Route
							layout={AuthLayout}
							path={routes.login}
							renderComponent={Login}
						/>
					</Switch>
				</AnimatePresence>
			)}
		/>
	);
};

export default Routes;
