// import React, { createContext, useEffect, useState } from 'react'
// import { auth } from './firebase';

// export const UserContext = createContext({user: null});

// export default (props) => {
//     const [user, setUser] = useState(null);

//     useEffect(() => {
//       auth.onAuthStateChanged(async (user)=>{
//         const {displayName, email} = user;
//         setUser({displayName, email});
//       });
//     }, [])
    
//     return (
//     <UserContext.Provider value = {user}>{props.children}</UserContext.Provider>
//   )
// }
