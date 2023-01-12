import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
import { useNavigation } from 'react-router-dom';


const stripePromise = loadStripe('pk_test_51MNeurGTAztyTxxYj9fNHdjkw6BMHMTSxyaXs25PAL0WuFdGvIwbPTqUlViVlYjweypR0cyMy0lIqrLDMXHXKWNZ00yu4F58ok');



const Payment = () => {
    const booking = useLoaderData();
    const navigation = useNavigation();
    const { itemName, price, number, meetingLocation } = booking;

    if (navigation.state === 'loading') {
        return <div className='text-center'>
            <div className="animate-spin radial-progress  text-primary-content border-2 border-primary" style={{ "--value": 70 }}></div>
        </div>;
    }
    return (
        <div className="p-3">
            <h1 className='text-4xl font-bold text-center my-3'>Payment for your item: <span className='text-secondary'>{itemName}</span></h1>
            <p className='text-xl font-semibold mb-5'>Please pay <strong>${price}</strong> for your buying at your no: {number} and meet location: {meetingLocation}</p>

            <div data-theme="synthwave" className='mx-auto  sm:w-full md:w-full lg:w-1/2 my-auto rounded-xl p-8'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        booking={booking}
                    />
                </Elements>
            </div>

        </div>
    );
};

export default Payment;