import React, { FC } from 'react';
import { useForm } from 'react-hook-form';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

interface FormData {
	password: string;
	email: string;
}

const Login: FC = () => {
	const { register, handleSubmit } = useForm<FormData>({
		mode: 'onSubmit',
		defaultValues: {
			password: 'password',
			email: 'email@mail.com',
		},
	});

	const onSubmit = handleSubmit((data) => {
		// console.log(data);
	});

	return (
		<form onSubmit={onSubmit}>
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
