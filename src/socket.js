import { io } from 'socket.io-client'

const socket = io('https://your-backend-url.com', {
  transports: ['websocket'],
})

export default socket 