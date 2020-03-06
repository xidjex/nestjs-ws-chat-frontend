import { createAction, createSlice } from '@reduxjs/toolkit';
import { ReduxAction } from '../../types';

// Types
import {
	UsersListState,
	SetUsersListAction,
	UpdateUserStatusPayload,
} from './types';

const initialState = {
	data: [],
} as UsersListState;

export const listSlice = createSlice({
	name: 'list',
	initialState,
	reducers: {
		setUsers: (state, action: ReduxAction<SetUsersListAction>): UsersListState => ({
			...state,
			data: [
				...state.data,
				...action.payload.users,
			],
		}),
		updateSingleUser: (state, action): UsersListState => ({
			...state,
			data: state.data.map((user) => {
				if (action.payload.user.id === user.id) {
					return action.payload.user;
				}

				return user;
			}),
		}),
	},
});

export const updateUserStatus = createAction<UpdateUserStatusPayload>(`${listSlice.name}/updateUserStatus`);

export const {
	setUsers,
	updateSingleUser,
} = listSlice.actions;

export default listSlice.reducer;
