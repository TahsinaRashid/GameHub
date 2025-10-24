import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup} from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase.init";
const googleprovider = new GoogleAuthProvider();
const Login =()=>{
    const navigate = useNavigate();
    const[error,setError]=useState('');
      const [ user,setUser]=useState(null);
      const handleSignIn =() =>{
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

    const handleLogin=(e)=>{
        e.preventDefault();
        const email=e.target.email.value;
        const password=e.target.password.value;
        console.log(email, password);

        setError('');
        signInWithEmailAndPassword(auth, email, password)
        .then(result =>{
            console.log(result.user);
            navigate('/profile');
        })
        .catch(error =>{
            console.log(error.message);
            setError(error.message);
        })
    }
    return(

    <div className=" md:mt-8 w-full m-auto max-w-lg lg:mt-30 ">
      <div className="">
        <h1 className="text-3xl font-bold text-gray-200 border-2 border-gray-200 bg-amber-900 text-center">Login now!</h1>
        <form onSubmit={handleLogin}>
            <fieldset className="fieldset">
          <label className="label font-bold text-white">Email</label>
          <input type="email" name="email" className="input w-full m-full" placeholder="Your Email" />
          <label className="label font-bold text-white ">Password</label>
          <input type="password" name="password" className="input w-full m-full" placeholder="Your Password" />
          <div><a className="link link-hover font-bold text-white">Forgot password?</a></div>
          <button className="text-white btn bg-amber-900 hover:bg-amber-400 hover:text-black">Login</button>
        </fieldset>
        </form>
        {
            error && <p className="text-red-500">{error}</p>
        }
        <div>
             <p className="text-white font-bold">Don't have an account? Do <Link className="text-yellow-600 underline font-bold" to ="/register">Register</Link></p>
          </div>
          <div className="text-center my-4"><button onClick={handleSignIn } className="bg-blue-200 hover:bg-blue-400 font-bold rounded-2xl px-6 "><Link to="/profile">Sign in with Google</Link></button></div>
      </div>
    </div>

    );
};
export default Login;