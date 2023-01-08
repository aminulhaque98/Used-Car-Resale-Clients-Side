import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='text-center text-xl'>
            <img className='mx-auto w-1/2 h-1/2 lg-ml-16' src="https://i.ibb.co/g3fWvd4/download.png" alt="" />
            <Link className='btn btn-outline btn-error' to='/'>Back To home page</Link>
        </div>
    );
};

export default NotFound;