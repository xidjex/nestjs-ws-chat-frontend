import { makeStyles, Theme } from '@material-ui/core/styles';
import { deepOrange } from '@material-ui/core/colors';

const useStyles = makeStyles((theme: Theme) => ({
	avatarLarge: {
		width: theme.spacing(8),
		height: theme.spacing(8),
		color: theme.palette.getContrastText(deepOrange[500]),
		backgroundColor: deepOrange[500],
		boxShadow: '1px 1px 7px rgba(0, 0, 0, .5)',
	},
	userCard: {
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		padding: '16px 16px 6px 16px',
		minHeight: '150px',
		boxSizing: 'border-box',
		backgroundColor: theme.palette.primary.light,
	},
	userName: {
		marginTop: 'auto',
		color: theme.palette.common.white,
		alignItems: 'center',
		display: 'flex',
		justifyContent: 'space-between',
	},
	userBadges: {
		display: 'flex',
		alignItems: 'center',
	},
}));

export default useStyles;
