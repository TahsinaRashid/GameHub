import React from "react";
import {Outlet} from 'react-router'
import Navbar from "../header/navbar";
import Footer from "../footer/Footer";

const Root = () => {
    return(
        <div>
            <div className="bg-gradient-to-r from-blue-200 to-pink-200">
                <Navbar></Navbar>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
        
    );
};
export default Root;