import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';

const ProfileDisplay = () => {
    useTitle('Profile');
    const { user } = useContext(AuthContext);
    const [name, setName] = useState(user?.displayName);
    // useTitle('Profile');
    const handleSubmit = event => {
        event.preventDefault();
    }

    const handleNameChange = event => {
        setName(event.target.value)
    }


    return (
        <div className="w-3/4 mx-auto my-20">
            <div className="hero-content ">
                <div className="card  w-full shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input onChange={handleNameChange} type="text" defaultValue={name} placeholder="" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input defaultValue={user?.email} readOnly type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input defaultValue={user?.photoURL} type="text" placeholder="" className="input input-bordered" />

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ProfileDisplay;