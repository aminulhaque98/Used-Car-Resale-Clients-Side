import React from 'react';
import { toast } from 'react-hot-toast';
import { FaCheck } from 'react-icons/fa';


const MyWishListCard = ({ product, setBooking }) => {
    const { _id, name, seller, picture, description, Product_type, location, resale_price, original_price, years_of_use, posted_time } = product;


    const userHandlerRemove = id => {
        const proceed = window.confirm('Are you sure,you want to cancel this review');
        if (proceed) {
            fetch(`https://products-resale-server-side-amber.vercel.app/wishlist/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {

                    if (data.deletedCount > 0) {
                        toast.success('Successfully Complete Your Removed wishlist!');
                    }
                })
        }

    }


    return (

        <div className="card w-96 my-3 bg-base-200 shadow-xl">
            <figure><img className='w-full h-72' src={picture} alt="car" /></figure>
            <div className="card-body ">
                <h2 className="card-title">
                    {name}
                    <div className="badge badge-secondary">{Product_type}</div>
                </h2>
                <p className='flex gap-3'>
                    <span className="badge decoration-pink-600">Seller: {seller}
                    </span><FaCheck className="text-blue-600 text-xl "></FaCheck>
                </p>
                <p>Description: {description}</p>

                <ul className="list-disc text-xl px-5">
                    <li className="text-cyan-600">Resale_price: ${resale_price}</li>
                    <li>Original_price: $
                        <span className=" line-through">{original_price}</span></li>
                    <li>Years_of_use: {years_of_use}</li>
                    <li>Location: {location}</li>
                    <li>Posted_time: {posted_time}</li>
                </ul>
                <div className="card-actions justify-end">

                    <button className="btn btn-outline btn-primary" onClick={() => userHandlerRemove(_id)} >Remove to wishlist</button>


                    <label htmlFor="booking-modal" className="btn btn-secondary " onClick={() => setBooking(product)} >Book Now</label>
                </div>
            </div>
        </div>

    );
};

export default MyWishListCard;