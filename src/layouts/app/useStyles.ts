import { makeStyles, Theme } from '@material-ui/core/styles';
import { deepOrange } from '@material-ui/core/colors';

const useStyles = makeStyles((theme: Theme) => ({
	avatarLarge: {
		width: theme.spacing(10),
		height: theme.spacing(10),
		color: theme.palette.getContrastText(deepOrange[500]),
		backgroundColor: deepOrange[500],
	},
	userName: {
		marginTop: theme.spacing(1),
		color: theme.palette.text.primary,
		alignItems: 'center',
		display: 'flex',
	},
}));

export default useStyles;
