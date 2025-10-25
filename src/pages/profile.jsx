import React from "react";

const Profile =()=>{
    return(
        <div className="container bg-black/70 text-white text-center"><h1 className="mt-8 pt-5 pb-5">Welcome to Profile</h1></div>
    );
};
export default Profile;



// import React, { useContext } from 'react';
// import { AuthContext } from '../context/AuthContext';
// import { motion } from 'framer-motion';
// import { NavLink } from 'react-router';

// const Profile = () => {
//     const { user } = useContext(AuthContext);
//     const defaultPhotoURL = "https://placehold.co/150x150/505050/ffffff?text=U"; 
   
//     const userName = user?.displayName || user?.email?.split('@')[0] || "GameHub User";

//     return (
//         <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.5 }}
//             className="flex items-center justify-center min-h-[70vh] p-4"
//         >
//             <div className="w-full max-w-md bg-black/70 p-8 rounded-xl shadow-2xl text-white border-4 border-amber-500/50">
//                 <div className="text-center mb-6">
//                     <img
//                         src={user?.photoURL || defaultPhotoURL}
//                         alt={`${userName}'s Profile`}
//                         className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-amber-500 shadow-lg"
//                         onError={(e) => {
//                             e.target.onerror = null;  
//                             e.target.src = defaultPhotoURL;
//                         }}
//                     />
//                     <h1 className="text-2xl font-extrabold mt-4 text-amber-300">Username: {userName}</h1>
//                     <p className="text-gray-400 text-sm">Email: {user?.email}</p>
//                 </div>
//                 <div className="space-y-4">
//                     <div className="bg-gray-700 p-4 rounded-lg shadow-inner">
//                         <h2 className="text-xl font-semibold text-gray-200">User Status</h2>
//                         <p className="text-green-400 font-bold">Logged in via: {user?.providerData?.[0]?.providerId === 'password' ? 'Email/Password' : user?.providerData?.[0]?.providerId || 'Unknown'}</p>
//                     </div>

//                     <div className="bg-gray-700 p-4 rounded-lg shadow-inner">
//                         <h2 className="text-xl font-semibold text-gray-200">Account Created</h2>
//                         <p className="text-gray-300">{user?.metadata?.creationTime ? new Date(user.metadata.creationTime).toLocaleDateString() : 'N/A'}</p>
//                     </div>
//                 </div>
        
//             </div>
//         </motion.div>
//     );
// };

// export default Profile;
