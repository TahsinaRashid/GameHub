import React, { useContext, useEffect } from "react";
import {Outlet, useLocation} from 'react-router'
import Navbar from "../header/navbar";
import Footer from "../footer/Footer";
import { AuthContext } from '../context/AuthContext';

const Root = () => {

    const location = useLocation();
    const { loading } = useContext(AuthContext);
    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-red-950 text-white">
                <p className="ml-3 text-xl text-white">Loading...</p>
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
        }else if(pathname==='/allgames'){
            title="All Games"
        }else if(pathname==='/contact'){
            title="Contact";
        }else if(pathname ==='/game/:id'){
            title="Game Details";
        }else {
            title = "404 Not Found"; 
        }
        document.title = title;
        
    }, [location.pathname]);
    return(
        <>
        <div>
            <div className="bg-red-950 ">
                <div  className="sticky top-0 z-50  bg-red-900">
                    <Navbar />
                </div>
                <Outlet />
            </div>
            <Footer />
        </div>
            
    
        </>
        
    );
};
export default Root;
