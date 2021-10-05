
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import MovyLogo from '../images/Movy-logo.png'

function navbar(){
  const [navBarScroll, setNavBarScroll] = useState(false);

  const navBarBackground = () =>{
    if(window.scrollY >= 80) {
      setNavBarScroll(true)
     
    }else{
      setNavBarScroll(false)
    }
  }
window.addEventListener('scroll', navBarBackground);
    return(
        <>
            <nav className={navBarScroll ? ' navbar active ' : 'navbar'} >
                 <div className="w-1/4">
                     <Link to="/" className="w-100"> <img src={MovyLogo} className="w-20 object-cover sm:w-10"></img></Link>
                  </div>
                  <div className="w-4/12 flex justify-between flex-wrap">
                     <a><Link to="/">Home</Link></a>
                     <a><Link to="/">Movies</Link></a>
                     <a><Link to="/">Series</Link></a>
                     <a><Link to="/">Recently Added</Link></a>
                     <a><Link to="/">My List</Link></a>
                  </div>
                  <div className="w-1/4 flex justify-end pl-11">
                    <a>Profile</a>
                  </div>
             </nav>
      </>
    )
}

export default navbar;
