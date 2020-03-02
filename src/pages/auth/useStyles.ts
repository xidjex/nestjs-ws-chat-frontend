import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
	avatar: {
		backgroundColor: theme.palette.secondary.main,
	},
	alert: {
		margin: '10px 0 0 0',
	},
	progress: {
		margin: '16px 0',
	},
	wrapper: {
		width: '100%',
		margin: theme.spacing(1),
		position: 'relative',
	},
	buttonProgress: {
		position: 'absolute',
		top: '50%',
		left: '50%',
		margin: '-12px 0 0 -12px',
	},
	link: {
		display: 'block',
		paddingTop: theme.spacing(1),
		float: 'right',
	},
}));

export default useStyles;
