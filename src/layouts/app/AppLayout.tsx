import React, { FC } from 'react';
import { useSelector } from 'react-redux';
/* eslint-disable */

import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import LockIcon from '@material-ui/icons/Lock';
import AdminIcon from '@material-ui/icons/SupervisedUserCircle';

// Background image
import background from '../../assets/background.jpg';

// Components
import { Content, Navigation } from '../../components';
import { RootState } from '../../redux/rootReducer';
import { UserState } from '../../redux/users/current/types';

// Styles
import {
	AppLayout as AppLayoutWrapper,
	NavigationContainer,
	CurrentUserCard,
} from './styles';

// Types
import { LayoutProps } from '../types';
import useStyles from './useStyles';
import getGravatar from '../../utils/getGravatar';

const AppLayout: FC<LayoutProps> = ({ children }: LayoutProps) => {
	const {
		data: {
			name,
			isAdmin,
			status,
			email,
		}
	} = useSelector<RootState>(({ users: { current } }) => current) as UserState;
	
	console.log(getGravatar(email));
	
	const styles = useStyles();
	return (
		<AppLayoutWrapper background={background}>
			<NavigationContainer>
				<Navigation>
					<CurrentUserCard>
						<Avatar
							alt={name.toUpperCase()}
							src={getGravatar(email)}
							className={styles.avatarLarge}
						/>
						<Typography variant="h6" className={styles.userName}>
							{isAdmin && <AdminIcon color="primary" /> }
							{name}
						</Typography>
					</CurrentUserCard>
				</Navigation>
			</NavigationContainer>
			<Content>
				{children}
			</Content>
		</AppLayoutWrapper>
	);
};

export default AppLayout;
