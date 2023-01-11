import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import DashboardLayout from '../../Layout/DashboardLayout';
import Main from '../../Layout/Main';
import Blog from '../../Others/Blog/Blog';
import FQA from '../../Others/FQA/FQA';
import NotFound from '../../Others/NotFound/NotFound';
import AddProduct from '../../pages/dashboard/AddProduct/AddProduct';
import AllBuyers from '../../pages/dashboard/AllBuyers/AllBuyers';
import AllUsers from '../../pages/dashboard/AllUsers/AllUsers';
import Dashboard from '../../pages/dashboard/Dashboard/Dashboard';
import MyOrders from '../../pages/dashboard/MyOrders/MyOrders';
import Home from '../../pages/Home/Home/Home';
import Login from '../../pages/Login/Login';
import Products from '../../pages/Products/Products/Products';
import SignUp from '../../pages/SignUp/SignUp';
import AdminRoute from '../AdminRoute/AdminRoute';
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
                path: '/products/:id',
                element: <PrivateRoutes><Products></Products></PrivateRoutes>,
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
                element: <Blog></Blog>,
            },
            {
                path: '/fqa',
                element: <FQA></FQA>,
            },

        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoutes><DashboardLayout></DashboardLayout></PrivateRoutes>,
        children: [
            {
                path: '/dashboard',
                element: <PrivateRoutes><MyOrders></MyOrders></PrivateRoutes>
            },
            {
                path: '/dashboard/allusers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: '/dashboard/allbuyers',
                element: <AllBuyers></AllBuyers>
            },
            {
                path: '/dashboard/addproduct',
                element: <AddProduct></AddProduct>
            }
        ]
    },



    {
        path: '*',
        element: <NotFound></NotFound>
    }
])


export default routes;