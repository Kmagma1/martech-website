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
    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Chat</h2>
      <div className="space-y-4">
        {messages.map((msg) => (
          <div key={msg.id} className="bg-white p-4 rounded-lg">
            <p>{msg.text}</p>
          </div>
        ))}
      </div>
      <form onSubmit={sendMessage} className="mt-4">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg"
          placeholder="Type a message..."
        />
        <button
          type="submit"
          className="bg-wine text-white px-4 py-2 mt-2 rounded-lg hover:bg-opacity-90"
        >
          Send
        </button>
      </form>
    </div>
  )
} 