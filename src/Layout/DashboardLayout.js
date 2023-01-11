import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../pages/Share/Navbar/Navbar';

const DashboardLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        <li><Link>All Users</Link></li>
                        <li><Link>All Buyers</Link></li>
                        <li><Link>Add a products</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;