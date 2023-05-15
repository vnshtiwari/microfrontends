import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
,

// Initialize Firebase

firebase.initializeApp(firebaseConfig);
var auth = firebase.auth();
export { auth, firebase };
