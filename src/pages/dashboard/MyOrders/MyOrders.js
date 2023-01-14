import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import useTitle from '../../../hooks/useTitle';
import MyOrderCard from './MyOrderCard';

const MyOrders = () => {
    const { user } = useContext(AuthContext);
    useTitle('My Orders');

    const url = `https://products-resale-server-side-amber.vercel.app/bookings?email=${user?.email}`;

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
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
                            <th>Payment</th>
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