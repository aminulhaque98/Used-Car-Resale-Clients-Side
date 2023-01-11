import React from 'react';

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
        </tr>
    );
};

export default MyOrderCard;