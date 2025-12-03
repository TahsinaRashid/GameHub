// import React, { useState, useEffect } from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import { getAuth, onAuthStateChanged, signOut } from "firebase/auth"; 
// import logo from "../assets/logo.png";
// import  { app}  from "../firebase/firebase.init"; 
// import {auth} from "../firebase/firebase.init";



// const Navbar = () => {
//        const navigate = useNavigate();
//     const [user, setUser] = useState(null);
//     const [loading, setLoading] = useState(true);
//     useEffect(() => {
//         const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//             setUser(currentUser);
//             setLoading(false);
//         });
//         return () => unsubscribe();
//     }, []);
//     const handleSignOut =() =>{
//         signOut(auth)
//         .then(() =>{
//             console.log('Successfully Signed Out');
//             setUser(null);
//             Navigate('/login');
//         })
//         .catch(error=>{
//             console.log(error);
//             navigate('/login');
//         })
//     }

//     const rightSideLinks = user ? (
//         <>
//         <li className=" bg-amber-900 font-bold text-onclick text-white rounded-2xl border-4 border-amber-200 mr-2 ">
//                 <NavLink to="/">Home</NavLink>
//             </li>
//             <li className=" bg-amber-900 font-bold text-onclick text-white rounded-2xl border-4 border-amber-200  "><NavLink to="/about">About</NavLink></li>
//             <li >
            
//                 <NavLink to="/profile">
//                     <img
//                         src={user.photoURL || "https://via.placeholder.com/32/7f8c8d/ffffff?text=U"} 
//                         alt={`${user.displayName || 'User'}'s profile`}
//                         className="w-8 h-8 rounded-full border border-amber-200 cursor-pointer" 
//                         title={`My Profile (${user.displayName || user.email})`}
//                     />
//                 </NavLink>
//             </li>
//             <li>
//                 <button className=" bg-amber-900 font-bold text-onclick text-white rounded-2xl border-4 border-amber-200" onClick={handleSignOut}>Log Out</button> 
//             </li>
//         </>
//     ) : (
//         <>
//         <li><button className=" bg-amber-900 font-bold text-onclick text-white rounded-2xl border-4 border-amber-200 mr-2"><NavLink to="/">Home</NavLink></button></li>
//         <li><button className=" bg-amber-900 font-bold text-onclick text-white rounded-2xl border-4 border-amber-200 mr-2"><NavLink to="/login">Log In</NavLink></button></li>
//         <li><button className=" bg-amber-900 font-bold text-onclick text-white rounded-2xl border-4 border-amber-200 mr-2"><NavLink to="/register">Register</NavLink></button></li>
//         </>
//     );
//     return (
//         <div className="navbar flex flex-wrap  lg:px-10 ">
//             <div className="navbar-start">
//                 <NavLink to="/">
//                     <img src={logo} alt="GameHub Logo" className="h-10 rounded-2xl border-2 border-yellow-400 shadow-yellow-500 
//                      " /> 
//                 </NavLink>
//             </div>
//             <div className=" lg:navbar-end">
//                 <ul className="menu menu-horizontal px-1 items-center">
//                     {rightSideLinks} 
//                 </ul>
//             </div>
//             <div className="dropdown dropdown-end ">
//                 <ul
//                     tabIndex={0}
//                     className="menu menu-sm dropdown-content mt-3 z-[1] p-2 rounded-full w-52 hover:bg-black flex flex-col gap-2">{rightSideLinks}
//                 </ul>
//             </div>
//         </div>
//     );
// };
// export default Navbar;
import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth"; 
import logo from "../assets/logo.png";
import { auth } from "../firebase/firebase.init";

const Navbar = () => {

    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, []);

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                setUser(null);
                navigate("/login"); // Fixed
            })
            .catch(error => {
                console.log(error);
                navigate("/login");
            });
    };

    // ---------------- NAV LINKS FOR BOTH MOBILE & DESKTOP -----------------
    const navLinks = (
        <>
            <li><NavLink to="/" className="nav-btn">Home</NavLink></li>
            <li><NavLink to="/all-items" className="nav-btn">All Items</NavLink></li>
            <li><NavLink to="/about" className="nav-btn">About Us</NavLink></li>
            <li><NavLink to="/contact" className="nav-btn">Contact</NavLink></li>
        </>
    );

    // -------- USER AUTH LINKS ----------
    const authLinks = user ? (
        <>
            <li>
                <NavLink to="/profile">
                    <img
                        src={user.photoURL || "https://via.placeholder.com/32?text=U"}
                        alt="User"
                        className="w-8 h-8 rounded-full border border-amber-300"
                    />
                </NavLink>
            </li>
            <li>
                <button onClick={handleSignOut} className="nav-btn">Log Out</button>
            </li>
        </>
    ) : (
        <>
            <li><NavLink to="/login" className="nav-btn">Login</NavLink></li>
             
        </>
    );

    return (
        <div className=" sticky top-0 z-50  text-white bg-red-900">
            <div className="max-w-7xl mx-auto ">

                <div className=" flex justify-between py-3">

                    {/* -------- LOGO -------- */}
                    <div className="navbar-start">
                        <NavLink to="/">
                            <img
                                src={logo}
                                alt="Logo"
                                className="h-10 rounded-xl border border-yellow-400 shadow-md"
                            />
                        </NavLink>
                    </div>

                    {/* ---------- DESKTOP NAV ---------- */}
                    <div className="hidden lg:flex navbar-end">
                        <ul className="menu menu-horizontal gap-3 font-semibold flex items-center">
                            {navLinks}
                            {authLinks}
                        </ul>
                    </div>

                    {/* ---------- MOBILE MENU ---------- */}
                    <div className="lg:hidden dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-sm border-amber-900 hover:bg-black hover:text-white">⁝</label>

                        <ul
                            tabIndex={0}
                            className="dropdown-content mt-3 z-[1] p-3 shadow bg-red-900 rounded w-56
                            flex flex-col gap-2 font-semibold"
                        >
                            {navLinks}
                            <hr className="border-amber-600" />
                            {authLinks}  
                        </ul>
                        
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Navbar;
