import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div className='text-center'>
            <div className="animate-spin radial-progress bg-primary text-primary-content border-4 border-primary" style={{ "--value": 70 }}></div>
        </div>
    }

    if (user && user?.uid) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace ></Navigate>;
};

export default PrivateRoutes;