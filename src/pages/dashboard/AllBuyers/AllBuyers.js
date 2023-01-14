import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';

const AllBuyers = () => {
    useTitle('AllBuyers');
    // const params = useParams();
    // const [buyers, setBuyers] = useState([]);

    // console.log(buyers);

    // useEffect(() => {
    //     fetch("https://products-resale-server-side-amber.vercel.app/users")
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //             setBuyers(data)
    //         })

    // }, [params?.Buyer])

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
                                <td>urole</td>



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