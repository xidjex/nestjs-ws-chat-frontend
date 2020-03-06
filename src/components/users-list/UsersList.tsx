import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import FolderIcon from '@material-ui/icons/Folder';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import ExitIcon from '@material-ui/icons/ExitToApp';
import AdminIcon from '@material-ui/icons/SupervisedUserCircle';

// Types
import { RootState } from '../../redux/rootReducer';
import { UserState } from '../../redux/users/current/types';
import { UserData, UsersListState } from '../../redux/users/list/types';
import User from '../../types/User';
import UserStatus from '../../types/UserStatus';

// Components
import { UserStatusIcon } from '../index';

// Actions
import { updateUserStatus } from '../../redux/users/list/listSlice';

interface Props {
	users?: User[];
}

const UsersList: FC<Props> = () => {
	const {
		data,
	} = useSelector<RootState>(({ users }) => users.list) as UsersListState;

	const {
		data: {
			isAdmin: isCurrentUserAdmin,
		},
	} = useSelector<RootState>(({ users }) => users.current) as UserState;

	const dispatch = useDispatch();

	const handleBanUser = (id: number) => (): void => {
		dispatch(updateUserStatus({ id, status: UserStatus.baned }));
	};

	return (
		<List>
			{
				data.map((user: UserData) => {
					const {
						id,
						name,
						email,
						isAdmin,
						status,
					} = user;

					return (
						<ListItem key={id}>
							<ListItemAvatar>
								<Avatar>
									<FolderIcon />
								</Avatar>
							</ListItemAvatar>
							<ListItemText
								primary={name}
								secondary={email}
							/>
							<ListItemSecondaryAction>
								<UserStatusIcon status={status} />
								{isAdmin
								&& (
									<Tooltip title="Admin" aria-label="admin">
										<AdminIcon />
									</Tooltip>
								)}
								{
									isCurrentUserAdmin
									&& (
										<Tooltip title="Logout" aria-label="logout">
											<IconButton
												aria-label="logout"
												onClick={handleBanUser(id)}
											>
												<ExitIcon />
											</IconButton>
										</Tooltip>
									)
								}
							</ListItemSecondaryAction>
						</ListItem>
					);
				})
			}
		</List>
	);
};

export default UsersList;
