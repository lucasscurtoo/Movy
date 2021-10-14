import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import MovyLogo from '../images/Movy-logo.png'

function navbar(){
  const [navBackground, setNavBackground] = useState('navbar');
  const navRef = React.useRef()
  navRef.current = navBackground;

  useEffect(() => {
    const scroll = () => {
      const show = window.scrollY > 80
      if (show) {
        setNavBackground('navbar active')
      }else{
        setNavBackground('navbar')
      }
    }
    document.addEventListener('scroll', scroll)

  }, [])
    return(
        <>
            <nav className={navBackground} >
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
