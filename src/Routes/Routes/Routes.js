import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main';
import Blog from '../../Others/Blog/Blog';
import FQA from '../../Others/FQA/FQA';
import NotFound from '../../Others/NotFound/NotFound';
import Home from '../../pages/Home/Home/Home';
import Login from '../../pages/Login/Login';
import SignUp from '../../pages/SignUp/SignUp';
import PrivateRoutes from '../PrivateRoutes/PrivateRoutes';


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>,
            },
            {
                path: '/blog',
                element: <PrivateRoutes><Blog></Blog></PrivateRoutes>,
            },
            {
                path: '/fqa',
                element: <FQA></FQA>,
            },

        ]
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }
])


export default routes;