import {app} from './app.js';
import http from 'http';
import {Server} from 'socket.io';
import LinvesModel from './models/lives.js';

export const server = http.createServer(app);
const io = new Server(server,{
	cors: {
		origin: process.env.FRONTEND_URL,
		methods: ['GET','POST']
	}
});

const rooms = {}
const livesRoomDetails = {}
const roomsOwner = {}

io.on('connection', (socket) => {
    console.log('new connection',socket.id)
	io.to(socket.id).emit('me',socket.id);
	socket.on('join-room',async ({user,roomId}) => {
		socket.join(roomId);
		if(!rooms[roomId]){
			rooms[roomId] = {}
		}
		if(!livesRoomDetails[roomId]){
			livesRoomDetails[roomId] = await LinvesModel.findById(roomId).populate('user');
			console.log('room',user)
		}
		rooms[roomId][socket.id] = {
			user,
			id: socket.id,
			owner: livesRoomDetails[roomId]?.user?._id.toString() == user?._id.toString()
		}
		if (livesRoomDetails[roomId]?.user?._id.toString() == user?._id.toString()){
			roomsOwner[roomId] = socket.id
		}
	});

	socket.on('sendoffer',({id,offer,roomId}) => {
		console.log('offer',offer)
		let ownerId = roomsOwner[roomId]
		io.to(ownerId).emit('reciveOffer',{offer,id});
	});

	socket.on('sendAnswer',({answer,id}) => {
		console.log('answer',answer,id)
		io.to(id).emit('reciveAnswer',{answer});
	});
});


