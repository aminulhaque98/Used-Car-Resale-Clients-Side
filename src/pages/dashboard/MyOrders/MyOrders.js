import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import MyOrderCard from './MyOrderCard';

const MyOrders = () => {
    const { user } = useContext(AuthContext);

    const url = `http://localhost:5000/bookings?email=${user?.email}`;

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data
        }
    })

    return (
        <div>
            <h1 className='text-2xl text-center font-bold my-8 '>My Orders</h1>

            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>ItemsName</th>
                            <th>$-Price</th>
                            <th>Number</th>
                            <th>Meeting-Location</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            bookings.map((booking, i) => <MyOrderCard
                                key={booking._id}
                                i={i}
                                booking={booking}
                            ></MyOrderCard>)
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyOrders;