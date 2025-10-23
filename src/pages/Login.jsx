import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase/firebase.init";

const googleprovider = new GoogleAuthProvider();
const Login =()=>{
    const [ user,setUser]=useState(null);

    const handleGoogleSignIn =() =>{
        // console.log('Google sign clicked');
        signInWithPopup(auth,googleprovider)
        .then(result =>{
            console.log(result.user);
            setUser(result.user);
        })
        .catch(error => {
            console.log(error);
        })
        
    }
    // const handleSignOut =() =>{
    //     signOut(auth)
    //     .then(() =>{
    //         console.log('Successfully Signed Out');
    //         setUser(null);
    //     })
    //     .catch(error=>{
    //         console.log(error);
    //     })
    // }

    return(
        <div className="text-white">
            <h2>Please Login</h2>
            <button onClick={handleGoogleSignIn}>Sign in with Google</button>
            {/* <button onClick={handleSignOut}>Sign Out</button> */}
            {/* {
                user ? <button onClick={handleSignOut}>Sign Out</button> : <button onClick={handleGoogleSignIn}>Sign in with Google</button>
            } */}
            {/* {user && <div>
                <h3>{user?.displayName}</h3>
                <h3>Email:{user.email}</h3>
                <img src={user.photoURL} alt="" />
            </div>
            }    */}
        </div>
    );
};
export default Login;