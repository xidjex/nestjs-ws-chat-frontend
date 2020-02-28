import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Alert from '@material-ui/lab/Alert';
import CircularProgress from '@material-ui/core/CircularProgress';

// Actions
import { login } from '../../redux/auth/login/loginSlice';

// Components
import Form from './styles';

// Styles
import useStyles from './useStyles';

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
		loading,
	} = useSelector<RootState>(({ auth }) => auth.login) as LoginState;

	const dispatch = useDispatch();

	// Form data
	const { register, handleSubmit } = useForm<FormData>({
		mode: 'onSubmit',
	});

	const styles = useStyles();

	const onSubmit = handleSubmit((data) => {
		dispatch(login(data));
	});

	return (
		<Form onSubmit={onSubmit}>
			<Avatar className={styles.avatar}>
				<LockOutlinedIcon />
			</Avatar>
			<Typography component="h1" variant="h5">
				Sign in
			</Typography>
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
			<div className={styles.wrapper}>
				<Button
					type="submit"
					fullWidth
					disabled={loading}
					variant="contained"
					color="primary"
				>
					Sign In
				</Button>
				{loading && <CircularProgress size={24} className={styles.buttonProgress} />}
			</div>
			{error && (<Alert className={styles.alert} severity="error">{error}</Alert>)}
		</Form>
	);
};

export default Login;
