import React from 'react';
import Banner from '../../Banner/Banner';
import Categories from '../../Categoreis/Categories';
import Contact from '../../../Others/Contact/Contact';
import ByUesdCar from '../../../Others/ByUsedCar/ByUesdCar';
import useTitle from '../../../hooks/useTitle';

const Home = () => {
    useTitle('Home');
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <ByUesdCar></ByUesdCar>
            <Contact></Contact>
        </div>
    );
};

export default Home;