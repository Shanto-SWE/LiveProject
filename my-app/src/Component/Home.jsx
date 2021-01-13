import React from 'react';
import { NavLink } from 'react-router-dom';
import Common from './Common'
const home='https://unity.trustradius.com/wp-content/uploads/2020/02/istock-1161433679-scaled-1536x1024.jpg'

const Home = () => {
    return (
        <>
          <Common name="Grow your business with" 
            imgsrc={home}
            visit="/service"
            btname="Get start"
            />
        </>
    );
};

export default Home;