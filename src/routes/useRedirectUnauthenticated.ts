import { useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';

// Types
import { RootState } from '../redux/rootReducer';
import { UserState } from '../redux/users/current/types';

import { routes } from './Routes';

const useRedirectUnauthenticated = (path = routes.login): void => {
	const {
		data: { authorized },
	} = useSelector<RootState>(({ users }) => users.current) as UserState;

	const { pathname } = useLocation();

	const history = useHistory();

	const isShouldRedirect = !authorized && pathname !== path;

	if (isShouldRedirect) {
		history.push(path);
	}
};

export default useRedirectUnauthenticated;
