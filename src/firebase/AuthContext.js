import { useContext, createContext, useEffect, useState } from 'react';
import {
  GoogleAuthProvider,
  signInWithPopup, 
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { auth } from './firebaseConfig';
import axios from 'axios';

const AuthContext = createContext();

async function addUserToDatabase(email, name){ 
  
  const url = "http://localhost:4000/user";//setUrl
  const saving = await axios({
    method: "POST",
    URL: url,
    data: {
      email: email,
      name: name
    }
  });
  console.log({saving});
}

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
    .then(result=>{
      const email = result.user.email;
      const name = result.user.name; 
      addUserToDatabase(email, name)
      .then(res1=>{
        console.log({res1});
      });
    }); 
  };

  const logOut = () => {
      signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log('User', currentUser)
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ googleSignIn, logOut, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};