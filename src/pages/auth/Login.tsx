import React, { FC, useEffect } from 'react';
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

// Validation Schema
import { LoginSchema } from './loginSchema';

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
		validationErrors = [],
	} = useSelector<RootState>(({ auth }) => auth.login) as LoginState;

	const dispatch = useDispatch();

	// Form data
	const {
		register,
		setError,
		handleSubmit,
		errors,
	} = useForm<FormData>({
		mode: 'onSubmit',
		validationSchema: LoginSchema,
	});

	const styles = useStyles();

	const onSubmit = handleSubmit((data) => {
		dispatch(login(data));
	});

	// Effects
	useEffect(() => {
		if (validationErrors.length) {
			setError(validationErrors);
		}
	}, [setError, validationErrors]);

	return (
		<Form onSubmit={onSubmit}>
			<Avatar className={styles.avatar}>
				<LockOutlinedIcon />
			</Avatar>
			<Typography component="h1" variant="h5">
				Sign in
			</Typography>
			<TextField
				autoComplete="email"
				autoFocus
				error={!!errors.email}
				fullWidth
				helperText={errors?.email?.message}
				id="email"
				inputRef={register}
				label="Email Address"
				margin="normal"
				name="email"
				required
				variant="outlined"
			/>
			<TextField
				autoComplete="current-password"
				error={!!errors.password}
				fullWidth
				helperText={errors?.password?.message}
				id="password"
				inputRef={register}
				label="Password"
				margin="normal"
				name="password"
				required
				type="password"
				variant="outlined"
			/>
			<div className={styles.wrapper}>
				<Button
					color="primary"
					disabled={loading}
					fullWidth
					type="submit"
					variant="contained"
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
