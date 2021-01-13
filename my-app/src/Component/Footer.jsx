import React from 'react';

const Footer = () => {
    const date=new Date().getFullYear();
    return (
        <>
            <footer>
            <p className=" bg-light text-center w-100">Md.Shanto © {date}</p>
            </footer>
           
        </>
    );
};

export default Footer;