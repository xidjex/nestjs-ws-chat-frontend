// Types
import { DefaultState } from '../types';
import User from '../../types/User';

export interface Message {
	id: number;
	text: string;
	date: string;
	user: User;
}

export interface MessagesState extends DefaultState{
	data: Message[];
}

export interface SendMessageActionPayload {
	text: string;
}

export interface AddMessagesActionPayload {
	messages: Message[];
}
