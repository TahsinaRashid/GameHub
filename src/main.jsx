import { React,Children, Component, StrictMode } from 'react'
import  {createRoot}  from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './layout/Root.jsx';
import Login from './pages/Login.jsx';
//import Home from './pages/HomePage.jsx';
import Profile from './pages/profile.jsx';
// import GameDetails from './pages/GameDetails.jsx';
import Register from './pages/Register.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import About from './pages/About.jsx';
import AuthProvider from './context/AuthContext.jsx';
import AllGames from './pages/AllGames.jsx';
//import GameDetails from './pages/GameDetails.jsx';
import HomePage from './pages/HomePage.jsx';
import Contact from './pages/Contact.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    Component:Root,
    children:[
      {
        index: true,
        Component: HomePage
      },
      {
        path : '/login',
        Component:Login
      },
      {
        path : '/register',
        Component:Register
      },
      {
        path : '/all-games',
        element:(<AllGames/>),
      },
      {
        path : "/profile",
        element:(
            <Profile/>
        ),
      },
      {
        path: "/about",
        element: (
          
            <About/> 
        ),
       },
      {
        path : "/contact",
        element:<Contact/>
          

      },
      
    ]
    
  },
  {
    path: '/*',
    Component: ErrorPage , 
    
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
    
  </StrictMode>,
)
