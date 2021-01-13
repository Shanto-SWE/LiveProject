import React from 'react';
import {NavLink} from 'react-router-dom'


const Navbar = () => {
    return (
        <>

        <div className="container-fluid n">
            <div className="row">
                <div className="col-11 mx-auto">

                 <nav class="navbar navbar-expand-md navbar-light fixed-top ">
              <div class="container-fluid">
                <NavLink class="navbar-brand" to='/'>Md.Shanto</NavLink>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <div class="navbar-nav ml-auto">
           
         <NavLink exact activeClassName="menu-active" classname="active" to="/">Home</NavLink>
         <NavLink activeClassName="menu-active" to="/about">about</NavLink>
        <NavLink activeClassName="menu-active" to="/service">Services</NavLink>
        <NavLink activeClassName="menu-active" to="/contact">Contact</NavLink>
        
      </div>
    </div>
  </div>
</nav>
        
        </div>
        </div>
            </div>
      
        </>
    );
};

export default Navbar;