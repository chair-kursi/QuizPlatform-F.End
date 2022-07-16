import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";  

const firebaseConfig = {
    apiKey: "AIzaSyATu9EDSOHEYpUQ0uYrk66DO2TGR8nFrBQ",
    authDomain: "quizapp-21a9e.firebaseapp.com",
    projectId: "quizapp-21a9e",
    storageBucket: "quizapp-21a9e.appspot.com",
    messagingSenderId: "218807364137",
    appId: "1:218807364137:web:f8b951e1907e0da8604a38"
  };

// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_API_KEY,
//     authDomain: process.env.REACT_APP_AUTH_DOMAIN, 
//     projectId: process.env.REACT_APP_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//     messagingSenderId:  process.env.REACT_APP_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_APP_ID
// }
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); 