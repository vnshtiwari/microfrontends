import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCi6G40jIx3qS4bQKPXNeGZFwRBR8ljKes",
  authDomain: "sincere-elixir-329614.firebaseapp.com",
  projectId: "sincere-elixir-329614",
  storageBucket: "sincere-elixir-329614.appspot.com",
  messagingSenderId: "550334072060",
  appId: "1:550334072060:web:58cc5f63fc3e377f8ec379",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
