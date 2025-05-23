import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'; // Import Firestore
import AsyncStorage from '@react-native-async-storage/async-storage';

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCxVn-CDWlZuR21bc7wn3Swo7Rlk67ZeBc",
    authDomain: "ts-kashmir-enterprises.firebaseapp.com",
    projectId: "ts-kashmir-enterprises",
    storageBucket: "ts-kashmir-enterprises.firebasestorage.app",
    messagingSenderId: "812545341350",
    appId: "1:812545341350:web:7e1c3e466d6baa82b5c167"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication with persistence
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
});

// Initialize Firestore
const db = getFirestore(app);

export { auth, db };