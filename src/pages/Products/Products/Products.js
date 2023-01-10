import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductsCard from '../productsCard/ProductsCard';

const Products = () => {
    const params = useParams();
    const [categories, setCategories] = useState([]);


    useEffect(() => {
        fetch(`http://localhost:5000/products/${params.id}`)
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [params?.id])



    return (
        <div>
            <h1 className='text-4xl text-center'>Just For You!</h1>
            <div className='grid my-12 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    categories.map(category => <ProductsCard
                        key={category._id}
                        category={category}
                    ></ProductsCard>)
                }
            </div>
        </div>
    );
};

export default Products;