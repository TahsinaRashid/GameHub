import React from "react";
import { NavLink } from "react-router";

const Footer =()=>{
    return(
    <footer className="footer footer-horizontal
    footer-center bg-red-950 text-gray-300 p-5 border-2 border-yellow-600">
        <aside>
            <p className="font-bold text-md">Gamehub - A Game Library</p>
            <p className="text-xs">Dive into our massive game library. Your next adventure awaits!</p>
            <p className="text-xs">Copyright © {new Date().getFullYear()} - All right reserved</p>
        </aside>
        <div className="underline font-bold"><NavLink to = "/">Back to Home</NavLink></div>
    </footer>
);};
export default Footer;