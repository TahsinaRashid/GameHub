import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext); 
    const location = useLocation();
    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen bg-gray-900">
                <span className="loading loading-spinner text-yellow-500 loading-lg"></span>
                <p className="ml-3 text-xl text-white">Checking Authentication...</p>
            </div>
        );
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
};

export default PrivateRoute;