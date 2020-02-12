import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

// Actions
import { login } from '../../redux/auth/login/loginSlice';

// Types
import { LoginState } from '../../redux/auth/login/types';
import { RootState } from '../../redux/rootReducer';

interface FormData {
	password: string;
	email: string;
}

const Login: FC = () => {
	// State
	const {
		error,
	} = useSelector<RootState>(({ auth }) => auth.login) as LoginState;

	const dispatch = useDispatch();

	// Form data
	const { register, handleSubmit } = useForm<FormData>({
		mode: 'onSubmit',
	});

	const onSubmit = handleSubmit((data) => {
		dispatch(login(data));
	});

	return (
		<form onSubmit={onSubmit}>
			{
				error && (<div>{error}</div>)
			}
			<TextField
				variant="outlined"
				margin="normal"
				required
				fullWidth
				id="email"
				label="Email Address"
				name="email"
				autoComplete="email"
				autoFocus
				inputRef={register}
			/>
			<TextField
				variant="outlined"
				margin="normal"
				required
				fullWidth
				name="password"
				label="Password"
				type="password"
				id="password"
				autoComplete="current-password"
				inputRef={register}
			/>
			<Button
				type="submit"
				fullWidth
				variant="contained"
				color="primary"
			>
				Sign In
			</Button>
		</form>
	);
};

export default Login;
