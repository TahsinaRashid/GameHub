import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../header/navbar';
import Footer from '../footer/Footer';
import back from "../assets/error.png";


const ErrorPage = () => {


    return (

        <div>
            <Navbar/>
             <div className="flex flex-col items-center justify-center py-2 text-white p-6"> 
            <div>
                <img src={back} alt="" />
            </div>
            
            <p className="text-lg text-gray-700 mb-8 text-center">
                Sorry!Maybe This Page is Deleted By The Developer
            </p>
            
            <Link 
                to="/" 
                className="bg-amber-900 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 text-lg shadow-lg"
            >
                Back To Home
            </Link>
        </div>
         <Footer/>
        </div>
       

        
        

    );
};

export default ErrorPage;
