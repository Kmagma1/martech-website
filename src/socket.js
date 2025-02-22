import { io } from 'socket.io-client'

const socket = io('http://localhost:3004', {
  transports: ['websocket'],
})

export default socket 