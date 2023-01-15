import React from 'react';

import useTitle from '../../../hooks/useTitle';

const AllBuyers = () => {
    useTitle('AllBuyers');


    return (
        <div>
            <h1 className='text-4xl font-bold text-secondary text-center my-3'>Our All Buyers Here!</h1>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Delate</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            <tr>
                                <th>1</th>
                                <td>name</td>
                                <td>email</td>
                                <td>role</td>



                                <td><button className="btn btn-xs btn-active btn-secondary">Delete</button></td>
                            </tr>
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllBuyers;