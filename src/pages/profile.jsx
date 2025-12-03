import React, { useContext, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { updateProfile } from 'firebase/auth'; 
import { AuthContext } from '../context/AuthContext';
import { auth } from '../firebase/firebase.init'; 
import { motion } from 'framer-motion';

const Profile = () => {
    const { user, loading, setUser } = useContext(AuthContext); 
    const [newName, setNewName] = useState('');
    const [newPhotoURL, setNewPhotoURL] = useState(''); 
    const [updateError, setUpdateError] = useState(null);
    const [updateSuccess, setUpdateSuccess] = useState(null);
    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
                <span className="loading loading-spinner loading-lg text-amber-500"></span>
                <p className="ml-3 text-xl">Loading profile data...</p>
            </div>
        );
    }
    if (!user) {
        return <Navigate to="/login" replace />;
    }

    const userName = user.displayName || 'N/A';
    const userEmail = user.email || 'N/A';
    const photoURL = user.photoURL;
    const handleUpdateProfile = (e) => {
        e.preventDefault();
        setUpdateError(null);
        setUpdateSuccess(null);
        if (!newName.trim() && !newPhotoURL.trim()) {
            setUpdateError("Please enter a new name or a new photo URL.");
            return;
        }

        const profileUpdates = {};
        if (newName.trim()) {
            profileUpdates.displayName = newName.trim();
        }
        if (newPhotoURL.trim()) {
            profileUpdates.photoURL = newPhotoURL.trim();
        }
        updateProfile(auth.currentUser, profileUpdates)
        .then(() => {
            setUpdateSuccess("Profile updated successfully!");
            setNewName('');
            setNewPhotoURL(''); 
        })
        .catch((error) => {
            setUpdateError(error.message || "Failed to update profile.");
            console.error("Update Profile Error:", error);
        });
    };


    return (
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center min-h-screen bg-cover bg-center"
        >
            <div className="  p-8 rounded shadow-2xl w-full max-w-lg border border-red-700/50 text-white">
                <h2 className="text-3xl font-extrabold text-center mb-6 drop-shadow-lg text-yellow-500">MY PROFILE</h2>
                <div className="flex justify-center mb-6">
                    <img
                        src={photoURL || "https://placehold.co/150x150/505050/ffffff?text=U"}
                        alt={`${userName}'s profile`}
                        className="w-32 h-32 rounded-full object-cover border-4 border-amber-500 shadow-xl"
                    />
                </div>
                <div className="space-y-4 mb-8">
                    <div className="p-4 bg-gray-800/70 rounded-lg border-l-4 border-amber-500">
                        <p className="text-lg font-bold">User Name:</p>
                        <p className="text-xl font-light text-red-300">{userName}</p>
                    </div>
                    <div className="p-4 bg-gray-800/70 rounded-lg border-l-4 border-red-500">
                        <p className="text-lg font-bold">Email:</p>
                        <p className="text-md font-light text-red-300">{userEmail}</p>
                    </div>
                </div>
                <div className="mt-8 p-6 bg-gray-800/80 rounded-lg shadow-inner">
                    <h3 className="text-xl font-bold mb-4 text-amber-400">Update Profile</h3>
                    
                    {updateError && <p className="text-red-400 mb-3">{updateError}</p>}
                    {updateSuccess && <p className="text-green-400 mb-3">{updateSuccess}</p>}
                    
                    <form onSubmit={handleUpdateProfile} className="space-y-4">
                        <input
                            type="text"
                            placeholder="Enter New Display Name"
                            value={newName}
                            onChange={(e) => setNewName(e.target.value)}
                            className="input input-bordered w-full bg-white/20 text-white placeholder-white/70 border-amber-600 focus:ring-amber-500"
                        />
                        <input
                            type="text"
                            placeholder="Enter New Photo URL"
                            value={newPhotoURL}
                            onChange={(e) => setNewPhotoURL(e.target.value)}
                            className="input input-bordered w-full bg-white/20 text-white placeholder-white/70 border-amber-600 focus:ring-amber-500"
                        />

                        <button type="submit" className="w-full btn bg-amber-600 hover:bg-amber-700 text-gray-900 font-extrabold border-amber-800 shadow-lg transition duration-300">
                            Update Name & Picture
                        </button>
                    </form>
                </div>
                <div className="mt-8 text-center">
                    <Link to="/">
                        <button className="w-full btn bg-red-800 hover:bg-red-700 text-white font-abold border-red-800 shadow-lg transition duration-300 text-lg">
                            Go to Home
                        </button>
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

export default Profile;