import React from 'react';
import { FaFacebookF, FaWhatsapp, FaInstagram, FaLinkedinIn } from 'react-icons/fa';


const contact = () => {
    return (

        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:w-1/2 lg:text-left">
                    <h1 className="text-2xl font-bold">JUST CONTACT <br />
                        US IN CORPORATE OFFICE</h1>
                    <p className="py-6">The used car market in Bangladesh is one of the most extensive markets in Bangladesh, with a value of about $32 billion in 2022. It is expected to reach $74 billion by 2027. Nearly 5 million used cars are sold in Bangladesh every year. Buying a used car has its own pros & cons; let’s look at the best-used cars under 5 lakhs in 2023</p>
                    <div className="flex justify-center text-xl text-primary">
                        <FaFacebookF className="mx-2"></FaFacebookF>
                        <FaWhatsapp></FaWhatsapp>
                        <FaInstagram className="mx-2"></FaInstagram>
                        <FaLinkedinIn></FaLinkedinIn>
                    </div>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className='flex g-2'>
                            <div className="form-control w-1/2 mx-2">
                                <label className="label">
                                    <span className="label-text">Your name</span>
                                </label>
                                <input type="text" placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Subject</span>
                            </label>
                            <input type="text" placeholder="subject" className="input input-bordered" />
                            <label className="label">
                            </label>
                        </div>
                        <textarea className="textarea textarea-bordered" placeholder="Your massage"></textarea>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default contact;