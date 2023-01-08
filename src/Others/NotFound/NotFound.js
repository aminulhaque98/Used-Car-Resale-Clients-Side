import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='mx-96 my-52 text-xl'>
            <h1>This Route is not found: Please search anything else.</h1>
            <h2>Not found 404 page:</h2>
            <Link className='text-red-400' to='/'>Back To home page</Link>
        </div>
    );
};

export default NotFound;