import React from 'react';
import Common from './Common'
const about='https://www.productdossier.com/admin-panel/uploads/blog_images/ea79d720c438e6ce755f7b4695d786a9.jpg'

const About = () => {
    return (
        <div>
            <Common name="Welcom to about page" 
            imgsrc={about}
            visit="/contact"
            btname="Contact Now"
            />
        </div>
    );
};

export default About;