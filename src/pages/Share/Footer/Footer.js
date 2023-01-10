import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black text-white">
            <div className="footer p-16">
                <div>
                    <img className='w-20 h-20 lg-ml-16 hover:animate-spin' src="https://i.ibb.co/HGyXBDk/car1.jpg" alt="" />
                    <p>NationWide Used Car Resale<br />Providing reliable tech since 2022</p>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <a href="/" className="link link-hover">Branding</a>
                    <a href="/" className="link link-hover">Design</a>
                    <a href="/" className="link link-hover">Marketing</a>
                    <a href="/" className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a href="/" className="link link-hover">About us</a>
                    <a href="/" className="link link-hover">Contact</a>
                    <a href="/" className="link link-hover">Jobs</a>
                    <a href="/" className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a href="/" className="link link-hover">Terms of use</a>
                    <a href="/" className="link link-hover">Privacy policy</a>
                    <a href="/" className="link link-hover">Cookie policy</a>
                </div>
            </div>
            <p className='text-xl text-center pb-4'>Copyright © 2022 NationWide Used Car Resale  All Rights Reserved.</p>
        </footer>

    );
};

export default Footer;