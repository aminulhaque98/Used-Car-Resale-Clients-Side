import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BookingModal from '../../BookingModal/BookingModal';
import ProductsCard from '../productsCard/ProductsCard';

const Products = () => {
    const params = useParams();
    const [products, setProducts] = useState([]);
    const [booking, setBooking] = useState(null);

    useEffect(() => {
        fetch(`https://products-resale-server-side-amber.vercel.app/products/${params.id}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [params?.id])



    return (
        <div>
            <h1 className='text-4xl text-center'>Just For You!</h1>
            <div className='grid my-12 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    products.map(product => <ProductsCard
                        key={product._id}
                        product={product}
                        setBooking={setBooking}
                    ></ProductsCard>)
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

export default Products;