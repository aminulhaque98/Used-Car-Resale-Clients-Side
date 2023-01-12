import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const DisplayError = () => {
    const error = useRouteError();
    const { logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut()

            .then(() => {
                navigate('/login');
            })
            .catch(error => console.error(error))
    }


    return (
        <div>
            <p className='text-red-600'>Some went wrong!!!</p>
            <p className='text-red-400'>{error.statusText || error.massage}</p>
            <h4 className='text-3xl'>Please <button className='me-3 font-semibold' onClick={handleLogOut} variant="outline-info">LogOut</button> and log back in</h4>
        </div>
    );
};

export default DisplayError;