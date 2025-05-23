//socket.js
import { io } from "socket.io-client";

const socket = io("https://real-time-task-board-y3lm.onrender.com");
const socket = io(import.meta.env.VITE_SOCKET_URL);

export default socket;
