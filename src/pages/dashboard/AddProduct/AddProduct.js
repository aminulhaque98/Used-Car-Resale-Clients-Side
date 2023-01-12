import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const AddProduct = () => {
    const { user } = useContext(AuthContext);



    const addProductHandler = event => {
        event.preventDefault();
        const form = event.target;
        const seller = form.name.value;
        const name = form.productName.value;
        const category_id = form.category.value;
        const Product_type = form.ProductType.value;
        const resale_price = form.ResalePrice.value;
        const original_price = form.originalPrice.value;
        const location = form.location.value;
        const posted_time = form.time.value;
        const years_of_use = form.Years.value;
        const image = form.image.files[0];
        const description = form.description.value;

        // b0e7ee6ce6b56eb9ba71cba89e876465

        const formDate = new FormData()
        formDate.append('image', image)

        const url = "https://api.imgbb.com/1/upload?key=b0e7ee6ce6b56eb9ba71cba89e876465"

        //imgbb te photo upload
        fetch(url, {
            method: 'POST',
            body: formDate,
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                const { display_url } = data?.data

                //mongodb te data upload
                const product = {
                    name,
                    category_id,
                    picture: display_url,
                    description,
                    location,
                    Product_type,
                    resale_price,
                    original_price,
                    years_of_use,
                    posted_time,
                    seller,

                }
                fetch('http://localhost:5000/products', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(product)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.acknowledged) {
                            form.reset();
                            toast.success('Your product placed successfully');
                        }
                    })
                    .catch(err => console.error(err));

            }).catch(err => console.log(err))

    }



    return (

        <div data-theme="retro" className='mx-auto sm:w-full md:w-full lg:w-1/2 my-auto rounded-xl p-4'>

            <div className="card mx-auto my-5 w-full max-w-lg shadow-2xl bg-base-100">

                <form className="card-body" onSubmit={addProductHandler}>
                    <h1 className="text-5xl text-center font-bold">You Add Product Here!</h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your name:</span>
                        </label>
                        <input type="text" name='name' placeholder="Your name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <input type="text" name='productName' placeholder="Product Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Categories id</span>
                        </label>
                        <select name="category" className="select select-bordered" required>
                            <option disabled selected>1</option>
                            <option>2</option>
                            <option>3</option>
                        </select>
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Product type</span>
                        </label>
                        <select name="ProductType" className="select select-bordered">
                            <option disabled selected>Fair</option>
                            <option>Good</option>
                            <option>Excellent</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Resale Price:</span>
                        </label>
                        <input type="text" name='ResalePrice' placeholder="Resale Price" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">original Price:</span>
                        </label>
                        <input type="text" name='originalPrice' placeholder="original Price" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">location:</span>
                        </label>
                        <input type="text" name='location' placeholder="location" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Years of use:</span>
                        </label>
                        <input type="text" name='Years' placeholder="Years of use:" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">posted_time:</span>
                        </label>
                        <input type="text" name='time' placeholder="posted_time:" className="input input-bordered" required />
                    </div>


                    <div className="form-control">

                        <label htmlFor='image' className='blog mb- text-sm'>
                            Select product Image:
                        </label>
                        <input type='file' id='image' name='image/*' required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description Here!</span>
                        </label>
                        <textarea name="description" className="textarea textarea-primary" placeholder="What's on your mind about Your service write here..."></textarea>

                    </div>

                    <div className="form-control">

                        <input className="btn btn-primary" type="submit" value="Add Product" />
                    </div>
                </form>

            </div>
        </div>
    );
};

export default AddProduct;