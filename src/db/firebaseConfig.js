import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDQs5-qOdPcKR5XlqVHdMi0g3DWEvkoAtU',
  authDomain: 'vuejs-product-app.firebaseapp.com',
  projectId: 'vuejs-product-app',
  storageBucket: 'vuejs-product-app.appspot.com',
  messagingSenderId: '496448907799',
  appId: '1:496448907799:web:1234567890abcdef'
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export default db
