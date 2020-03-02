import * as Yup from 'yup';

export const RegisterSchema = Yup.object({
	email: Yup.string().email().required(),
	password: Yup.string().min(6).required(),
	passwordConfirmation: Yup.string()
		.oneOf([Yup.ref('password')], 'Passwords doesn\'t match'),
});
