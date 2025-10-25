import { React,Children, Component, StrictMode } from 'react'
import  {createRoot}  from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './layout/Root.jsx';
import Login from './pages/Login.jsx';
import Home from './pages/Home.jsx';
import Profile from './pages/profile.jsx';
import GameDetails from './pages/GameDetails.jsx';
import Register from './pages/Register.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import About from './pages/About.jsx';
import AuthProvider from './context/AuthContext.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    Component:Root,
    children:[
      {
        index: true,
        Component:Home
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
        path : "/game/:id",
        element:<PrivateRoute><GameDetails/></PrivateRoute>
          

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
