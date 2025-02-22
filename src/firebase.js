import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDpqOMCUdeLXMlou0_1PpMTvA3zIq8XpXE',
  authDomain: 'martech-chat-9179e.firebaseapp.com',
  projectId: 'martech-chat-9179e',
  storageBucket: 'martech-chat-9179e.firebasestorage.app',
  messagingSenderId: '15868967394',
  appId: '1:15868967394:web:ab22fa72b1173a9d72e1bb',
  measurementId: 'G-KY3WWPW14L',
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db }