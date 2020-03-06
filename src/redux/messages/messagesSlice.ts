import { createAction, createSlice } from '@reduxjs/toolkit';
import { ReduxAction } from '../types';
import { AddMessagesActionPayload, MessagesState, SendMessageActionPayload } from './types';

const initialState = {
	data: [],
} as MessagesState;

const messagesSlice = createSlice({
	name: 'auth.register',
	initialState,
	reducers: {
		addMessage: (state, action: ReduxAction<AddMessagesActionPayload>): MessagesState => ({
			...state,
			data: [...state.data, ...action.payload.messages],
		}),
	},
});

export const sendMessage = createAction<SendMessageActionPayload>(`${messagesSlice.name}/sendMessage`);

export const {
	addMessage,
} = messagesSlice.actions;


export default messagesSlice.reducer;
