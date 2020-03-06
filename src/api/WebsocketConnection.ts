import io from 'socket.io-client';
import UserStatus from '../types/UserStatus';

export enum Events {
	usersList = 'users-list',
	usersListUpdate = 'users-list-update',
	messages = 'messages',
	exception = 'exception', // Api exception
	connect = 'connect',
	disconnect = 'disconnect',
	error = 'error', // Websocket exception
}

export enum DispatchEvents {
	messages = 'messages',
	userStatusChange = 'user-status-change',
}

export interface Dispatch {
	[key: string]: any;
}

export interface DispatchMessage extends Dispatch {
	text: string;
}

export interface DispatchChangeUserStatus extends Dispatch {
	id: number;
	status: UserStatus;
}

const ConnectionError = new Error('WS connection hasn\'t been initialized');

class WebsocketConnection {
	private _connection?: SocketIOClient.Socket;

	connect = (): Promise<WebsocketConnection> => new Promise((resolve) => {
		const host = String(process.env.REACT_APP_WS_HOST);
		const token = String(localStorage.getItem('jwt'));

		this._connection = io(host, {
			query: {
				token,
			},
		});

		this._connection.on(Events.connect, () => {
			resolve(this);
		});
	});

	disconnect(): WebsocketConnection {
		if (this._connection) {
			this._connection.disconnect();
		} else {
			throw ConnectionError;
		}

		return this;
	}

	listen(event: Events, handler: Function): WebsocketConnection {
		if (this._connection) {
			this._connection.on(event, handler);
		} else {
			throw ConnectionError;
		}

		return this;
	}

	dispatch<Data extends Dispatch>(event: DispatchEvents, data: Data): WebsocketConnection {
		if (this._connection) {
			this._connection.emit(event, data);
		} else {
			throw ConnectionError;
		}

		return this;
	}

	get connection(): SocketIOClient.Socket | undefined {
		if (!this._connection) {
			throw ConnectionError;
		}

		return this._connection;
	}
}

export default new WebsocketConnection();
