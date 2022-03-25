import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

firebase.initializeApp({
  apiKey: "AIzaSyCJwATev29AKTPd-EIk8qm6D94rlWcbQ_I",
  authDomain: "chat-hybri-b2146.firebaseapp.com",
  projectId: "chat-hybri-b2146",
  storageBucket: "chat-hybri-b2146.appspot.com",
  messagingSenderId: "626350284768",
  appId: "1:626350284768:web:acbf925896e5ccd99c1585",
});

export const auth = firebase.auth();
export const firestore = firebase.firestore();
