import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase.init";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { motion } from 'framer-motion';

const googleprovider = new GoogleAuthProvider();
const Register=()=>{
  const navigate = useNavigate();
  const [ user,setUser]=useState(null);
  const handleGoogleSignIn =() =>{
          signInWithPopup(auth,googleprovider)
          .then(result =>{
              console.log(result.user);
              setUser(result.user);
              navigate('/profile');
          })
          .catch(error => {
              console.log(error);
          })
          
      }

    const [error,setError]=useState(false)
    const [success,setSuccess]=useState(null)
    const[showPassword,setShowPassword]=useState(false);

    const handleRegister=(event)=>{
        event.preventDefault();
        const email=event.target.email.value;
        const password=event.target.password.value;
        const terms=event.target.terms.checked;
        console.log('register click',email,password,terms);

        const passwordPattern=/^.{6,}$/;
        const casePattern=/^(?=.*[a-z])(?=.*[A-Z]).+$/;
        if(!passwordPattern.test(password)){
            console.log('Invalid Password');
            setError('Password must be in six character');
            return;
        }
        else if(!casePattern.test(password)){
            setError('Password Must have one uppercase and one lowercase character');
            return;
        }

        setError('');
        setSuccess(null);

        if(!terms){
          setError('Please Accept Out Terms & Condition');
          return;
        }

        createUserWithEmailAndPassword(auth,email,password)
        .then( result=>{
            console.log('After creating of a new user',result.user);
            updateProfile(result.user, {
                displayName: name,
                photoURL: photoURL
            }).then(() => {
                console.log('Profile updated successfully');
            }).catch((error) => {
                console.error('Profile update error:', error);
            });
            setSuccess(true);
            event.target.reset();
            navigate('/profile');

        })
        .catch(error=>{
            console.log('error happend',error);
            setError(error.message);
        })

    }
    const handleTogglePasswordShow=(event)=>{
        event.preventDefault();
        setShowPassword(!showPassword);

    }
    return(
      <motion.div className="hero  min-h-screen">
  <div className="hero-content flex-col">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold text-white">Register now!</h1>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={handleRegister}>
            <fieldset className="fieldset">
          <label className="label font-bold">Name</label>
          <input type="name" name="name" className="input" placeholder="Your Name" />
          <label className="label font-bold">Email</label>
          <input type="email" name="email" className="input" placeholder="Email" />
          <label className="label font-bold">Photo URL</label>
          <input type="url" name="url" className="input" placeholder="Your PhotoURL" />
          <label className="label font-bold">Password</label>
          <div className="relative">
            <input type={showPassword ? 'text' : 'password'} name="password" className="input" placeholder="Password" />
            <button
            type="button"
            onClick={handleTogglePasswordShow}
             className="btn btn-xs top-2 right-5 absolute">
              {showPassword? <FaEyeSlash />:<FaEye />}
             </button>
             
          </div>
          <div>
            <label className="label">
               <input
                type="checkbox" 
                name="terms"
               className="checkbox font-bold" />
               Accept Our Terms & Conditions</label>
          </div>
          <div>
             <p>Already have an account? Please <Link className="text-blue-600 underline font-bold" to ="/login">Login</Link></p>
          </div>
          <div className="text-center my-4">
            <button onClick={handleGoogleSignIn} className="bg-blue-200 hover:bg-blue-400 font-bold rounded-2xl px-6 "><Link to="/profile">Sign in with Google</Link></button>
          </div>
          <button className="btn bg-yellow-600 ">Sign-In</button>
          <div><a className="link link-hover">Forgot password?</a></div>
        </fieldset>
        {
            success && <p className="text-green-700">Account created successfully</p>
        }
        {
            error && <p className="text-red-500">{error}</p>
        }
        </form>
       
      </div>
    </div>
  </div>
</motion.div>
 );
};
export default Register;