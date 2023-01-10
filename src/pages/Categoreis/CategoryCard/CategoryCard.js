import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {
    const { name, image, category_id } = category;

    return (
        <div className="card w-96 mx-auto hover:bg-base-100 shadow-xl image-full">
            <figure><img src={image} alt="Car" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>You can get one of these in the used car market without much hassle. Which one of these used cars would you prefer?</p>
                <div className="card-actions justify-end">
                    <Link to={`/products/${category_id}`}> <button className="btn btn-primary">Show More</button></Link>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;