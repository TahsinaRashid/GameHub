// import { GoogleAuthProvider, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup} from "firebase/auth";
// import React, { useRef, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { auth } from "../firebase/firebase.init";
// import {motion} from 'framer-motion';

// const googleprovider = new GoogleAuthProvider();
// const Login =()=>{
//     const navigate = useNavigate();
//     const[error,setError]=useState('');
//     const emailRef=useRef();
//     //   const [ user,setUser]=useState(null);
//       const handleSignIn =() =>{
//           signInWithPopup(auth,googleprovider)
//           .then(result =>{
//               console.log(result.user);
//               setUser(result.user);
//               //navigate('/profile');
//           })
//           .catch(error => {
//               console.log(error);
//           })
          
//       }

//     const handleLogin=(e)=>{
//         e.preventDefault();
//         const email=e.target.email.value;
//         const password=e.target.password.value;
//         console.log(email, password);

//         setError('');
//         signInWithEmailAndPassword(auth, email, password)
//         .then(result =>{
//             console.log(result.user);
//             //navigate('/profile');
//             if(!result.user.emailVerified){
//                 alert('please verify your email address');
//             }
//         })
//         .catch(error =>{
//             console.log(error.message);
//             setError(error.message);
//         })
//     }
//     const handleForgetPassword=()=>{
        
//         const email=emailRef.current.value;
//         console.log("Forget Password",email);
//         sendPasswordResetEmail(auth,email)
//         .then(()=>{
//             alert('Please check your email')
//         })
//         .catch()
//     }

//     return(

//     < motion.div initial={{ opacity: 0, y: -50 }} 
//             animate={{ opacity: 1, y: 0 }}   
//             transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
//              className=" md:mt-8 w-full m-auto max-w-lg lg:mt-30 ">
//       <div className="">
//         <h1 className="text-3xl font-bold text-gray-200 border-2 border-gray-200 bg-amber-900 text-center">Login now!</h1>
//         <form onSubmit={handleLogin}>
//             <fieldset className="fieldset">
//           <label className="label font-bold text-white">Email</label>
//           <input 
//           type="email" 
//           name="email" 
//           className="input w-full m-full" 
//           ref={emailRef}
//           placeholder="Your Email" />
//           <label className="label font-bold text-white ">Password</label>
//           <input type="password" name="password" className="input w-full m-full" placeholder="Your Password" />
//           <div onClick={handleForgetPassword}><a className="link link-hover font-bold text-white">Forgot password?</a></div>
//           <button className="text-white btn bg-amber-900 hover:bg-amber-400 hover:text-black">Login</button>
//         </fieldset>
//         </form>
//         {
//             error && <p className="text-red-500">{error}</p>
//         }
//         <div>
//              <p className="text-white font-bold">Don't have an account? Do <Link className="text-yellow-600 underline font-bold" to ="/register">Register</Link></p>
//           </div>
//           <div className="text-center my-4">
//                     <button 
//                         onClick={handleSignIn} 
//                         className="bg-blue-200 hover:bg-blue-400 font-bold rounded-2xl px-6 py-2 w-full"
//                     >
//                         Sign in with Google
//                     </button>
//                 </div>
//       </div>
//     </motion.div>

//     );
// };
// export default Login;











import React, { useContext, useRef, useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';
import { motion } from 'framer-motion';

const Login = () => {
    const { setUser } = useContext(AuthContext); 
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const emailRef = useRef(null); 
    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        setError(null);
        setSuccess(null);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                navigate('/profile'); 
            })
            .catch((error) => {
                setError(error.message);
                console.error(error);
            });
    };

    const handleLogin = (e) => {
        e.preventDefault();
        setError(null);
        setSuccess(null);

        const email = e.target.email.value;
        const password = e.target.password.value;

        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                navigate('/profile'); 
            })
            .catch((error) => {
                setError("Login failed. Check email and password.");
                console.error(error);
            });
    };

    const handleForgetPassword = () => {
        const email = emailRef.current.value;
        if (!email) {
            setError("Please enter your email address to reset password.");
            return;
        }
        setError("Password reset feature is temporarily disabled.");
    };

    return (
        <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center min-h-screen p-4 bg-cover bg-center"
        >
            <div className="bg-black/60  p-8 rounded-xl shadow-2xl w-full max-w-md border border-red-700/50">
                <h2 className="text-4xl font-extrabold text-white text-center mb-6 drop-shadow-lg">Login Now!</h2>
                
                {error && <p className="text-red-400 text-center mb-4 p-2 bg-red-900/50 rounded">{error}</p>}
                {success && <p className="text-green-400 text-center mb-4 p-2 bg-green-900/50 rounded">{success}</p>}

                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <label className="label">
                            <span className="label-text text-white/90">Email</span>
                        </label>
                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            ref={emailRef}
                            className="input input-bordered input-error w-full bg-white/20 text-white placeholder-white/70 border-red-600 focus:ring-red-500"
                            required
                        />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text text-white/90">Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            className="input input-bordered input-error w-full bg-white/20 text-white placeholder-white/70 border-red-600 focus:ring-red-500"
                            required
                        />
                        <button 
                            type="button" 
                            onClick={handleForgetPassword} 
                            className="text-sm text-yellow-400 hover:text-yellow-300 transition duration-300 mt-2 block"
                        >
                            Forgot password?
                        </button>
                    </div>
                    <button type="submit" className="w-full btn bg-red-700 hover:bg-red-800 text-white font-bold border-red-900 shadow-lg transition duration-300 mt-6">
                        Login
                    </button>
                </form>

                <p className="text-center text-white/80 mt-4">
                    Don't have an account? <Link to="/register" className="text-yellow-400 font-bold hover:underline">Register</Link>
                </p>

                <div className="divider text-white/70">OR</div>
                
                <button 
                    type="button" 
                    onClick={handleGoogleSignIn} 
                    className="w-full btn bg-blue-600 hover:bg-blue-700 text-white font-bold border-blue-800 shadow-lg transition duration-300"
                >
                    Sign in with Google
                </button>
            </div>
        </motion.div>
    );
};

export default Login;