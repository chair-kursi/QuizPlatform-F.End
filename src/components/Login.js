import React, { useEffect } from 'react';
import { UserAuth } from '../firebase/AuthContext';
import { useNavigate } from 'react-router-dom';


export default function Login() {
    const navigate = useNavigate();
    const { googleSignIn, user } = UserAuth();

    const handleGoogleSignIn = async () => {
        try {
            await googleSignIn(); 
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (user != null && Object.keys(user).length) {
            console.log({user});
            alert("Signed In");
            navigate('/logout');
        }
    }, [user]);
    return (
        <div>
            <button onClick={handleGoogleSignIn}>
                SignIn with Google
            </button>
        </div>
    )
}
