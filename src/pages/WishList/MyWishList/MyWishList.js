import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import BookingModal from '../../BookingModal/BookingModal';
import MyWishListCard from './MyWishListCard/MyWishListCard';

const MyWishList = () => {
    const { user } = useContext(AuthContext);
    const [booking, setBooking] = useState(null);


    const url = `https://products-resale-server-side-amber.vercel.app/wishlist/?email=${user?.email}`;

    const { data: wishlist = [] } = useQuery({
        queryKey: ['wishlist', user?.email],
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
            <h1 className='text-4xl text-center'>My WishList here!</h1>
            <div className='grid my-12 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    wishlist.map(product => <MyWishListCard
                        key={product._id}
                        product={product}
                        setBooking={setBooking}
                    ></MyWishListCard>)
                }
            </div>
            {
                booking &&
                <BookingModal
                    booking={booking}
                    setBooking={setBooking}
                ></BookingModal>
            }
        </div>
    );
};

export default MyWishList;