import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Updated Firebase config with the values from your new google-services.json
const firebaseConfig = {
  apiKey: "AIzaSyDLxF-z-bfsGMC3Pd5cIsXCieUNLdMmz2Q",            // Your updated API key
  authDomain: "just-legal.firebaseapp.com",                    // Firebase auth domain (this will be inferred, but you can use the default if desired)
  projectId: "just-legal",                                     // Your new Firebase project ID
  storageBucket: "just-legal.appspot.com",                     // Your Firebase storage bucket
  messagingSenderId: "416945414790",                           // Messaging sender ID from google-services.json
  appId: "1:416945414790:android:c5291606e8aad863aa6707",      // App ID from google-services.json
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize auth; only for native platforms (Android and iOS)
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { auth };
