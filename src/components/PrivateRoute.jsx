import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
// import { auth } from '../firebase/firebase.init'; 
// import { useAuthState } from 'react-firebase-hooks/auth'; 
import { AuthContext } from '../context/AuthContext';

const PrivateRoute = ({ children }) => {
    const [user, loading] = useContext(AuthContext);
    // const [user, loading] = useAuthState(auth);
    const location = useLocation();
    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <span className="loading loading-spinner text-yellow-500 loading-lg"></span>
                <p className="ml-3 text-xl">Checking Authentication...</p>
            </div>
        );
    }
    if (user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
        
    }
    return children;
    
};

export default PrivateRoute;