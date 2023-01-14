import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BookingModal from '../../BookingModal/BookingModal';
import MyWishListCard from './MyWishListCard/MyWishListCard';

const MyWishList = () => {
    // const params = useParams();
    // const [products, setProducts] = useState([]);
    // const [booking, setBooking] = useState(null);

    // useEffect(() => {
    //     fetch(`http://localhost:5000/products/${params.id}`)
    //         .then(res => res.json())
    //         .then(data => setProducts(data))
    // }, [params?.id])

    return (
        <div>
            <h1 className='text-4xl text-center'>My WishList here!</h1>
            <div className='grid my-12 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {/* {
                    products.map(product => <MyWishListCard
                        key={product._id}
                        product={product}
                        setBooking={setBooking}
                    ></MyWishListCard>)
                } */}
                <MyWishListCard></MyWishListCard>
            </div>
            {/* {
                booking &&
                <BookingModal
                    booking={booking}
                    setBooking={setBooking}
                ></BookingModal>
            } */}
        </div>
    );
};

export default MyWishList;