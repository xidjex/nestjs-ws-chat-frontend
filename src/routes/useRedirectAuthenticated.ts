import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

// Actions
import { checkToken } from '../redux/users/current/currentSlice';

// Types
import { UserState } from '../redux/users/current/types';
import { RootState } from '../redux/rootReducer';

// Constants
import { routes } from './Routes';

const useRedirectAuthenticated = (path = routes.home): void => {
	const {
		data: { authorized },
	} = useSelector<RootState>(({ users }) => users.current) as UserState;

	const dispatch = useDispatch();

	const history = useHistory();

	useEffect(() => {
		if (authorized) {
			history.push(path);
		}
	}, [authorized, history]);

	useEffect(() => {
		dispatch(checkToken());
	}, []);
};

export default useRedirectAuthenticated;
