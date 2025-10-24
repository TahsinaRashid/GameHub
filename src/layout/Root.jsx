import React from "react";
import {Outlet} from 'react-router'
import Navbar from "../header/navbar";
import Footer from "../footer/Footer";
import backgroundImage from "../assets/back.png";

const Root = () => {
    const backgroundImageURL=`url(${backgroundImage})`
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