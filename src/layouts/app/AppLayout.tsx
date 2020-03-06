import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import ExitIcon from '@material-ui/icons/ExitToApp';
import IconButton from '@material-ui/core/IconButton';
import AdminIcon from '@material-ui/icons/SupervisedUserCircle';
import Tooltip from '@material-ui/core/Tooltip';

// Background image
import background from '../../assets/background.jpg';

// Components
import {
	Content,
	Navigation,
	UserStatusIcon,
} from '../../components';

// Utils
import useLogout from '../../utils/useLogout';

// Styles
import {
	AppLayout as AppLayoutWrapper,
	NavigationContainer,
} from './styles';

// Types
import { LayoutProps } from '../types';
import useStyles from './useStyles';
import { UserState } from '../../redux/users/current/types';
import { RootState } from '../../redux/rootReducer';
import UsersList from '../../components/users-list/UsersList';

// Utils
import getGravatar from '../../utils/getGravatar';

const AppLayout: FC<LayoutProps> = ({ children }: LayoutProps) => {
	const {
		data: {
			name,
			isAdmin,
			status,
			email,
		},
	} = useSelector<RootState>(({ users: { current } }) => current) as UserState;

	const handleLogout = useLogout();

	const styles = useStyles();
	return (
		<AppLayoutWrapper background={background}>
			<NavigationContainer>
				<Navigation>
					<div className={styles.userCard}>
						<Avatar
							alt={name.toUpperCase()}
							src={getGravatar(email)}
							className={styles.avatarLarge}
						/>
						<Typography variant="subtitle1" className={styles.userName}>
							{name}
							<div className={styles.userBadges}>
								<UserStatusIcon status={status} />
								{isAdmin
									&& (
										<Tooltip title="Admin" aria-label="admin">
											<AdminIcon />
										</Tooltip>
									)}
								<Tooltip title="Logout" aria-label="logout">
									<IconButton
										aria-label="logout"
										size="small"
										style={{ color: 'white' }}
										onClick={handleLogout}
									>
										<ExitIcon />
									</IconButton>
								</Tooltip>
							</div>
						</Typography>
					</div>
					<UsersList />
				</Navigation>
			</NavigationContainer>
			<Content>
				{children}
			</Content>
		</AppLayoutWrapper>
	);
};

export default AppLayout;
