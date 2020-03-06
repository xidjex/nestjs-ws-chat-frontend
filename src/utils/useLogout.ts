import { useDispatch } from 'react-redux';

// Actions
import { logout } from '../redux/users/current/currentSlice';

const useLogout = (): () => void => {
	const dispatch = useDispatch();

	return (): void => {
		dispatch(logout());
	};
};

export default useLogout;
