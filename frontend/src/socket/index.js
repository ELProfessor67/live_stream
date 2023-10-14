import {io} from 'socket.io-client';
import { REACT_PUBLIC_BACKEND_URL } from '../constants';


export const socketInit = () => {
	const options = {
		'force new connection': true,
		reconnectionAttempt: 'Infinity',
		timeout: 10000,
		transform: ['websocket']
	}

	return io(REACT_PUBLIC_BACKEND_URL, options);
}