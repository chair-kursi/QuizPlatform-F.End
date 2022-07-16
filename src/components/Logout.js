import React, { useEffect } from 'react';
import { UserAuth } from '../firebase/AuthContext';
import { useNavigate } from 'react-router-dom';


export default function Login() {
    const navigate = useNavigate();
    const { logOut, user } = UserAuth();

    const handleGoogleLogout = async () => {
        try {
            await logOut();
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (user == null || !Object.keys(user).length) {
            console.log({user}); 
            navigate('/login');
        }
    }, [user]);
    return (
        <div>
            <button onClick={handleGoogleLogout}>
                SignOut
            </button>
        </div>
    )
}
