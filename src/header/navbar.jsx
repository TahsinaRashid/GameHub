import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth"; 
import logo from "../assets/logo.png";
import  {app}  from "../firebase/firebase.init"; 

const auth = getAuth(app);

const Navbar = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);
    const handleSignOut =() =>{
        signOut(auth)
        .then(() =>{
            console.log('Successfully Signed Out');
            setUser(null);
        })
        .catch(error=>{
            console.log(error);
        })
    }

    const rightSideLinks = user ? (
        <>
            <li className=" bg-amber-900 font-bold text-onclick text-white rounded-2xl border-4 border-amber-200 "><NavLink to="/">Home</NavLink></li>
            <li>
                <NavLink to="/profile">
                    <img
                        src={user.photoURL || "https://via.placeholder.com/32/7f8c8d/ffffff?text=U"} 
                        alt={`${user.displayName || 'User'}'s profile`}
                        className="w-8 h-8 rounded-full object-cover border border-amber-200 cursor-pointer" 
                        title={`My Profile (${user.displayName || user.email})`}
                    />
                </NavLink>
            </li>
            <li>
                <button className=" bg-amber-900 font-bold text-onclick text-white rounded-2xl border-4 border-amber-200" onClick={handleSignOut}>Log Out</button> 
            </li>
        </>
    ) : (
        <>
        <li><button className=" bg-amber-900 font-bold text-onclick text-white rounded-2xl border-4 border-amber-200 mr-2"><NavLink to="/">Home</NavLink></button></li>
        <li><button className=" bg-amber-900 font-bold text-onclick text-white rounded-2xl border-4 border-amber-200 mr-2"><NavLink to="/login">Log In</NavLink></button></li>
        <li><button className=" bg-amber-900 font-bold text-onclick text-white rounded-2xl border-4 border-amber-200 mr-2"><NavLink to="/register">Register</NavLink></button></li>
        </>
    );
    return (
        <div className="navbar">
            <div className="flex-1">
                <NavLink to="/">
                    <img src={logo} alt="GameHub Logo" className="h-10 rounded-2xl border-2 border-yellow-400 shadow-yellow-500" /> 
                </NavLink>
            </div>
            <div className="">
                <ul className="menu menu-horizontal px-1 items-center">
                    {rightSideLinks} 
                </ul>
            </div>
            <div className="dropdown dropdown-end lg:hidden">
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content mt-3 z-[1] p-2 rounded-full w-52 hover:bg-black">{rightSideLinks}
                </ul>
            </div>
        </div>
    );
};
export default Navbar;