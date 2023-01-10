import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const BookingModal = ({ booking }) => {
    const { name, resale_price, posted_time } = booking;
    const { user } = useContext(AuthContext)

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.userName.value;
        const email = form.email.value
        const itemName = form.itemName.value;
        const price = form.price.value;
        const number = form.number.value;
        const meetingLocation = form.meetingLocation.value;


        //mongodb te data upload
        const book = {
            name,
            email,
            itemName,
            price,
            number,
            meetingLocation
        }
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(book)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    form.reset();
                    toast.success('Your Booking placed successfully');
                }
            })
            .catch(err => console.error(err));

    }




    return (
        <>

            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-accent w-24 btn-circle absolute right-2 top-2">cancel</label>
                    <h3 className="text-lg font-bold">{posted_time}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-12'>
                        <input name="userName" type="text" disabled value={user?.displayName} className="input input-bordered w-full" />
                        <input name="email" type="text" disabled value={user?.email} className="input input-bordered w-full" />
                        <input name='itemName' type="text" disabled value={name} className="input input-bordered w-full" />
                        <input name='price' type="text" disabled value={resale_price} className="input input-bordered w-full" />
                        <input name="number" type="text" placeholder="Your Number" className="input input-bordered w-full" />
                        <input name="meetingLocation" type="text" placeholder="Meeting Location" className="input input-bordered w-full" />

                        <input className='btn btn-primary w-full' type="submit" value="Submit" />
                    </form>

                </div>
            </div>

        </>
    );
};

export default BookingModal;