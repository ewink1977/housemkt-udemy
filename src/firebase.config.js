import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
	apiKey: 'AIzaSyCuRQM95FB6hNKeyIkXqg3GUUgO8ctNdu8',
	authDomain: 'house-marketplace-app-52aa2.firebaseapp.com',
	projectId: 'house-marketplace-app-52aa2',
	storageBucket: 'house-marketplace-app-52aa2.appspot.com',
	messagingSenderId: '614653791082',
	appId: '1:614653791082:web:4c2234f75ffc51cfa43313',
}

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()
