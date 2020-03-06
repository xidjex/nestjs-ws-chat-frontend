import React, { FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Link from '@material-ui/core/Link';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Alert from '@material-ui/lab/Alert';
import CircularProgress from '@material-ui/core/CircularProgress';

// Actions
import { register as registerAction, reset as resetState } from '../../redux/auth/register/registerSlice';

// Routes
import { routes } from '../../routes/Routes';

// Components
import { Form } from './styles';

// Styles
import useStyles from './useStyles';

// Validation Schema
import { RegisterSchema } from './registerSchema';

// Types
import { RegisterState } from '../../redux/auth/register/types';
import { RootState } from '../../redux/rootReducer';

interface FormData {
	password: string;
	passwordConfirmation: string;
	email: string;
	name: string;
}

const Login: FC = () => {
	// State
	const {
		error,
		loading,
		validationErrors = [],
	} = useSelector<RootState>(({ auth }) => auth.register) as RegisterState;

	const dispatch = useDispatch();

	// Form data
	const {
		register,
		setError,
		handleSubmit,
		errors,
	} = useForm<FormData>({
		mode: 'onSubmit',
		validationSchema: RegisterSchema,
	});

	const styles = useStyles();

	const onSubmit = handleSubmit((data) => {
		const { email, password, name } = data;

		dispatch(registerAction({ email, password, name }));
	});

	// Effects
	useEffect(() => {
		if (validationErrors.length) {
			setError(validationErrors);
		}
	}, [setError, validationErrors]);

	// Component unmount
	useEffect(() => (): void => {
		dispatch(resetState());
	}, [dispatch]);

	return (
		<Form onSubmit={onSubmit}>
			<Avatar className={styles.avatar}>
				<LockOutlinedIcon />
			</Avatar>
			<Typography component="h1" variant="h5">
					Register
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
				autoComplete="name"
				autoFocus
				error={!!errors.name}
				fullWidth
				helperText={errors?.name?.message}
				id="name"
				inputRef={register}
				label="Name"
				margin="normal"
				name="name"
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
			<TextField
				autoComplete="current-password"
				error={!!errors.passwordConfirmation}
				fullWidth
				helperText={errors?.passwordConfirmation?.message}
				id="passwordConfirmation"
				inputRef={register}
				label="Password Confirmation"
				margin="normal"
				name="passwordConfirmation"
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
					Register
				</Button>
				<Typography variant="subtitle1">
					<Link
						className={styles.link}
						component={RouterLink}
						to={routes.login}
					>
						{/* eslint-disable-next-line react/no-unescaped-entities */}
						I'm already have an account
					</Link>
				</Typography>
				{loading && <CircularProgress size={24} className={styles.buttonProgress} />}
			</div>
			{error && (<Alert className={styles.alert} severity="error">{error}</Alert>)}
		</Form>
	);
};

export default Login;
