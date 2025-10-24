import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { auth } from '../firebase/firebase.init'; 
import { useAuthState } from 'react-firebase-hooks/auth'; 

const PrivateRoute = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <span className="loading loading-spinner text-yellow-500 loading-lg"></span>
            </div>
        );
    }
    if (user) {
        return children; 
    }
    return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;