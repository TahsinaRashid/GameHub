import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../header/navbar';
import Footer from '../footer/Footer';
import back from "../assets/error.png";


const ErrorPage = () => {


    return (

        <div>
            <div className="sticky top-0 z-50  bg-red-900">
                <Navbar/>
            </div>
            
             <div className="bg-red-950 flex flex-col items-center justify-center py-8 text-white"> 
            <div>
                <img src={back} alt="" />
            </div>
            
            <p className="text-lg text-gray-200 mt-4 mb-6 text-center">
                Sorry!Maybe This Page is Deleted By The Developer
            </p>
            
            <Link 
                to="/" 
                className="bg-yellow-500 hover:bg-amber-700 text-black font-bold py-3 px-8 rounded-lg transition duration-300 text-lg shadow-lg"
            >
                Back To Home
            </Link>
        </div>
         <Footer/>
        </div>
       

        
        

    );
};

export default ErrorPage;
