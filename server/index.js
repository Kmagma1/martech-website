import express from 'express'
import http from 'http'
import { Server } from 'socket.io'

const app = express()
const server = http.createServer(app)
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:5181',
    methods: ['GET', 'POST'],
  },
})

// Basic route for testing
app.get('/', (req, res) => {
  res.json({ message: 'API is working!' })
})

io.on('connection', (socket) => {
  console.log('A user connected:', socket.id)

  socket.on('sendMessage', (message) => {
    io.emit('receiveMessage', message)
  })

  socket.on('disconnect', () => {
    console.log('A user disconnected:', socket.id)
  })
})

server.listen(3004, () => {
  console.log('Socket.IO server is running on port 3004')
})

export default app