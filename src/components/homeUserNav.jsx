
import React from 'react';
import { Link } from 'react-router-dom';
import MovyLogo from '../images/Movy-logo.png'

function navbar(){
    return(
        <>
            <nav className="home-navbar">
                 <Link to="/"> <img src={MovyLogo}></img></Link>
                  <div className="home-navbar-links">
                     <a><Link to="/">Home</Link></a>
                     <a><Link to="/">Movies</Link></a>
                     <a><Link to="/">Series</Link></a>
                     <a><Link to="/">Recently Added</Link></a>
                     <a><Link to="/">My List</Link></a>
                  </div>
                  <div className="home-navbar-profile">
                    <a>alo</a>
                  </div>
             </nav>
      </>
    )
}

export default navbar;