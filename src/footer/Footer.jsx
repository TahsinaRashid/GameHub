// // import { div } from "framer-motion/client";
// // import React from "react";
// // import { NavLink } from "react-router";

// // const Footer =()=>{
// //     return(
// //         <div className="lg:px-10">
// //             <footer className="footer footer-horizontal
// //     footer-center bg-red-950 text-gray-300 p-5 border-2 border-yellow-600 ">
// //         <aside>
// //             <p className="font-bold text-md">Gamehub - A Game Library</p>
// //             <p className="text-xs">Dive into our massive game library. Your next adventure awaits!</p>
// //             <p className="text-xs">Copyright © {new Date().getFullYear()} - All right reserved</p>
// //         </aside>
// //         <div className="underline font-bold"><NavLink to = "/">Back to Home</NavLink></div>
// //     </footer>
// //         </div>
    
// // );};
// // export default Footer;



// // src/layout/Footer.jsx
import React from 'react';
import logo from "../assets/logo.png";
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
//import { Facebook, Twitter, Instagram, Linkedin, Rss } from 'lucide-react';

// Mock Footer Link Data
const FOOTER_LINKS = [
    { 
        title: "Support", 
        links: [
            { name: "About Us", href: "/about" }, 
            { name: "Contact", href: "/contact" }, 
            { name: "Linkedin", href: "https://www.linkedin.com/in/tahsina-rashid-prapti/" }, 

        ] 
    },
    { 
        title: "Back to", 
        links: [
            { name: "Home", href: "/" }, 
            { name: "All Games", href: "/allgames" }, 
            { name: "Login", href: "/login" }
        ] 
    },
];

const SocialIcon = ({ Icon, name, href }) => (
    <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer" 
        aria-label={name}
        className="text-gray-400 hover:text-yellow-500 transition duration-300 transform hover:scale-110"
    >
        <Icon className="w-6 h-6" />
    </a>
);

// Main Footer Component
const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-950 border-t border-yellow-600/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
                
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8 border-b border-gray-800 pb-5">
                    
                    {/* Logo and Social Media */}
                    <div className="col-span-3 md:col-span-2 space-y-2">
                        <div className="text-3xl font-extrabold text-yellow-500 flex items-center">
                           <img
                                src={logo}
                                alt="Logo"
                                className="h-10 rounded-xl border border-yellow-400 mr-2"
                            /> 
                         GameHub
                        </div>
                        <p className="text-gray-200 text-sm max-w-sm">
                            Your next level gaming adventure.
                        </p>
                        <div className="flex space-x-4 pt-2">
                            <SocialIcon Icon={Facebook} name="Facebook" href="https://www.facebook.com/" />
                            <SocialIcon Icon={Twitter} name="Twitter" href="https://www.facebook.com/" />
                            <SocialIcon Icon={Instagram} name="Instagram" href="https://www.instagram.com/" />
                            <SocialIcon Icon={Linkedin} name="LinkedIn" href="https://www.linkedin.com/" />
    
                        </div>
                    </div>

                    {/* Link Sections */}
                    {FOOTER_LINKS.map((section, index) => (
                        <div key={index} className="space-y-4">
                            <h4 className="text-lg font-bold text-white mb-2 border-b-2 border-yellow-500/50 inline-block pb-1">
                                {section.title}
                            </h4>
                            <ul className="space-y-2">
                                {section.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <a 
                                            href={link.href} 
                                            className="text-gray-400 hover:text-yellow-400 text-sm transition duration-200"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Copyright */}
                <div className="mt-8 text-center pt-4">
                    <p className="text-gray-500 text-sm">
                        &copy; {currentYear} GameHub. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
Footer.jsx
