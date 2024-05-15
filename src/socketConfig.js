import io from 'socket.io-client';
const baseURL = "https://server-kj64.onrender.com";
const socket = io(`${baseURL}`);

export default socket;