import React, { FunctionComponent } from 'react';
import { routes } from './Routes';

// Hooks
import useRedirectUnauthenticated from './useRedirectUnauthenticated';

// Components
import Route, { Props } from './Route';

const PrivateRoute: FunctionComponent<Props> = (props) => {
	useRedirectUnauthenticated(routes.login);

	return <Route {...props} />;
};

export default PrivateRoute;
