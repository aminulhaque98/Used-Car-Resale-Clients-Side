import React from 'react';
import { Link } from 'react-router-dom';

const MyOrderCard = ({ booking, i }) => {
    const { name, email, itemName, price, number, meetingLocation } = booking;

    return (
        <tr>
            <th>{i + 1}</th>
            <td>{name}</td>
            <td>{email}</td>
            <td>{itemName}</td>
            <td>$-{price}</td>
            <td>{number}</td>
            <td>{meetingLocation}</td>
            <td>
                {
                    booking.price && !booking.paid && <Link to={`/dashboard/payment/${booking._id}`}><button className='btn btn-primary btn-sm'>pay</button></Link>
                }
                {
                    booking.price && booking.paid && <span text-primary>Paid</span>
                }
            </td>
        </tr>
    );
};

export default MyOrderCard;