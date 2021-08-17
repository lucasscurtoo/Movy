import React from 'react';
import { Link } from 'react-router-dom';
import MovyLogo from '../images/Movy-logo.png';

function Header (){
    return(
        <header>
        <div className="Main-header-logo">
           <Link to="/" exact><img src={MovyLogo}></img></Link>
        </div>
        <div className="Main-header-in">
            <Link to="/login"> Register </Link>
            <Link to='/login' id="Log-in"> Login </Link>
        </div>
    </header>
    )
}
export default Header;