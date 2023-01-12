import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import useToken from '../../hooks/useToken';

const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { createUser, updateUser } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [createUserEmail, setCreateUserEmail] = useState('');
    const [token] = useToken(createUserEmail);
    const navigate = useNavigate();

    if (token) {
        navigate('/');
    }

    const handleSignUp = data => {

        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                toast.success('Successfully Complete Your SignUp!');

                const userInfo = {
                    displayName: data?.name,
                    role: data?.category,

                }

                updateUser(userInfo)
                    .then(() => {
                        saveUser(data?.name, data?.email, data?.category);
                    })
                    .catch(err => console.log(err));

            })
            .catch(error => {
                toast.error("This didn't work.")
                setError(error.message);
            });
    }

    const saveUser = (name, email, role) => {
        const user = { name, email, role };
        fetch('https://products-resale-server-side-amber.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setCreateUserEmail(email);
            })
    }




    return (
        <div data-theme="valentine" className='h-[800px] flex justify-center items-center drop-shadow-2xl'>
            <div className='w-96 p-7'>
                <h2 className='text-4xl text-center font-bold'>SignUp</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input type="text" {...register("name", { required: "Name is required" })} className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className="text-red-600">{errors.name?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Your Email</span>
                        </label>
                        <input type="email" {...register("email", { required: "Email Address is required" })} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className="text-red-600">{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Your Password</span></label>
                        <input type="password" {...register("password", { required: "Password is required", minLength: { value: 6, message: "Password must be 6 characters or longer" } })} className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className="text-red-600">{errors.password?.message}</p>}

                    </div>
                    <select className="input input-bordered w-full max-w-xs my-3" {...register("category", { required: true })}>
                        <option value="">Select...</option>
                        <option value="Buyer">Buyer</option>
                        <option value="Seller">Seller</option>
                    </select>
                    <input className='btn  w-full mb-3' value='Sign Up' type="submit" />
                    {error && <p className='text-red-600'>{error}</p>}
                </form>
                <p>Already have an account?<Link className='text-orange-600' to="/login">Login</Link></p>

            </div>
        </div>
    );
};

export default SignUp;