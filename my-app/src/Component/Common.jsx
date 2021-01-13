import React from 'react';
import { NavLink } from 'react-router-dom';

const Common = (props) => {
    return (
        <>
        <section id="header" className="mt-5">
         
        <div className="container-fluid ">
            <div className="row">
                <div className="col-11 mx-auto">
                    <div className="row">
                    <div className="col-md-6 pt-5 mt-5 pt-lg-0 order-2 order-lg-1 ">
                      <h1>{props.name} <strong className="brand-name">Md.Shanto</strong></h1>
                      <h2>
                          We are the team of talented developer making websites
                      </h2>
                      <div className="mt-3">
                          <NavLink to={props.visit}><button type="button" class="btn btn-outline-success">{props.btname}</button></NavLink>
                      </div>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2 header-img">
                         <img src={props.imgsrc}  className="img-fluid animated" alt="home"/>
                    </div>
                    </div>
                  

                </div>

                </div>
                </div>
        </section>
        </>
    );
};

export default Common;