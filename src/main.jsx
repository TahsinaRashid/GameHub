import { Children, Component, StrictMode } from 'react'
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
          <PrivateRoute>
            <Profile/>
          </PrivateRoute>
        ),
      },
      {
        path : "/game/:id",
        element:(
          <PrivateRoute>
            <GameDetails/>
          </PrivateRoute>
        ),
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
