import React, { useState, useEffect } from 'react'
import socket from '../socket'
import { db } from '../firebase'
import { collection, addDoc, serverTimestamp, query, orderBy, onSnapshot } from 'firebase/firestore'

export default function Chat() {
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])

  // Fetch messages from Firebase
  useEffect(() => {
    const q = query(collection(db, 'messages'), orderBy('timestamp', 'asc'))
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const messages = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
      setMessages(messages)
    })

    return () => unsubscribe()
  }, [])

  // Handle sending messages
  const sendMessage = async (e) => {
    e.preventDefault()
    if (message.trim()) {
      const newMessage = {
        text: message,
        timestamp: serverTimestamp(),
      }

      // Save message to Firebase
      await addDoc(collection(db, 'messages'), newMessage)

      // Emit message via Socket.IO
      socket.emit('sendMessage', newMessage)

      setMessage('')
    }
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl mt-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-900">Chat</h2>
      <div className="space-y-4 h-64 overflow-y-auto mb-6">
        {messages.map((msg) => (
          <div key={msg.id} className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-800">{msg.text}</p>
          </div>
        ))}
      </div>
      <form onSubmit={sendMessage} className="flex gap-2">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-wine"
          placeholder="Type a message..."
        />
        <button
          type="submit"
          className="bg-wine text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition duration-300"
        >
          Send
        </button>
      </form>
    </div>
  )
} 