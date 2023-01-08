import React from 'react';

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://i.ibb.co/1MXyDFw/most-reliable-car.jpg")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Best Used Cars Under 5 Lakhs | 2023 Edition</h1>
                    <p className="mb-5">The used car market in Bangladesh is one of the most extensive markets in Bangladesh, with a value of about $32 billion in 2022. It is expected to reach $74 billion by 2027. Nearly 5 million used cars are sold in Bangladesh every year. Buying a used car has its own pros & cons; let’s look at the best-used cars under 5 lakhs in 2023</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;