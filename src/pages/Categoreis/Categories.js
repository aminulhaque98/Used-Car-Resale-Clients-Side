import React, { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard/CategoryCard';

const Categories = () => {
    const [categories, setCategories] = useState([]);
    console.log(categories);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div className='my-5'>
            <h1 className="text-5xl font-bold text-center">Our Second Hand Product
            </h1>
            <p className='text-2xl font-bold text-center'>Categories</p>
            <p className='text-xl w-1/2 mx-auto font-bold text-center'>You can get one of these in the used car market without much hassle. Which one of these used cars would you prefer?</p>

            <div className='grid gap-6 mt-5  grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

                {

                    categories.map(category => <CategoryCard
                        key={category._id}
                        category={category}
                    ></CategoryCard>)

                }

            </div>

        </div>
    );
};

export default Categories;