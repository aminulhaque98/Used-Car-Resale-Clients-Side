import React from 'react';

const ByUesdCar = () => {
    return (
        <div className='mx-2 my-5 bg-indigo-100 outline-double outline-3 outline-offset-2 rounded-xl'>
            <div className=''>
                <h1 className='text-2xl font-bold pl-12 mt-5'>Buying a used car?</h1 >
                <p className='text-xl pl-12'>here is why you should do it in Car castle</p>
                <div className='grid gap-6 mt-2 mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-12'>
                    <div className="card w-72 bg-white bg-base-100 shadow-xl ">
                        <figure className="px-10 pt-10">
                            <img src="https://i.ibb.co/mXHbytX/private.png" alt="private" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Great Value!</h2>
                            <p>Skip the dealership margins, and buy directly from individuals</p>

                        </div>
                    </div>
                    <div className="card w-72  bg-white bg-base-100 shadow-xl ">
                        <figure className="px-10 pt-10">
                            <img src="https://i.ibb.co/tL8Dbc9/car.png" alt="heard" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Trusted Quality!</h2>
                            <p>Condition reports upfront & online, down to every scratch</p>

                        </div>
                    </div>
                    <div className="card w-72  bg-white bg-base-100 shadow-xl ">
                        <figure className="px-10 pt-10">
                            <img src="https://i.ibb.co/j8yL1Zp/rating.png" alt="raiting" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">All online!</h2>
                            <p>We handle every step, you just click click click</p>

                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default ByUesdCar;