import React, { useContext, useEffect } from "react";
import {Outlet, useLocation} from 'react-router'
import Navbar from "../header/navbar";
import Footer from "../footer/Footer";
import backgroundImage from "../assets/back.png";
import { AuthContext } from '../context/AuthContext';

const Root = () => {
    const backgroundImageURL=`url(${backgroundImage})`;
    const location = useLocation();
    const { loading } = useContext(AuthContext);
    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
                <p className="ml-3 text-xl">Loading...</p>
            </div>
        );
    }
    useEffect(() => {
        const pathname = location.pathname;
        let title = "GameHub";

        if (pathname === '/') {
            title = "GameHub - Home";
        } else if (pathname.startsWith('/game/')) {
            title = "Game Details";
        } else if (pathname === '/login') {
            title = "Login";
        } else if (pathname === '/register') {
            title = "Register";
        } else if (pathname === '/profile') {
            title = "My Profile";
        } else if (pathname === '/about') {
            title = "About Us";
        } else {
            title = "404 Not Found"; 
        }
        document.title = title;
        
    }, [location.pathname]);
    return(
        <>
            <div 
                className="min-h-screen bg-cover bg-center bg-fixed" 
                style={{ 
                    backgroundImage: backgroundImageURL,
                }}
            >
                <Navbar />
                <div className="container mx-auto p-4">
                 <Outlet />
                </div>
            
            </div>
            <Footer />
        </>
        
    );
};
export default Root;