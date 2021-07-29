import React from 'react';
import {Link} from 'react-router-dom';
import Footer from '../components/footer'
import Header from '../components/header'
import '../styles/login.css'
import FacebookIcon from '../images/facebook-icon.png'

function logIn() {
    return ( 
    <> 
     <main>
       <Header/>
         <div className="login-container">
             <div className="login-box">
                 <form>
                     <h1>Inicia sesión</h1>
                     <input placeholder="Email o número de teléfono"></input>
                     <input placeholder="Contraseña"></input>
                     <Link to="/home" id="Log-in">Iniciar sesión</Link>
                 </form>
                 <section>
                     <input type="checkbox" id="activarCheckbox"></input>
                     <label htmlFor="activarCheckbox">Recuérdame</label>
                     <i>
                         <Link to="/">¿Necesitas ayuda?</Link>
                     </i>
                 </section>
                 <section className="login-wfacebook">
                     <img src={FacebookIcon}></img>
                     <i>
                         <Link>Iniciar sesión con Facebook</Link>
                     </i>
                 </section>
                 <section className="login-suscribenow">
                     <Link>
                         <h2>¿Primera vez en Movy? Suscríbete ya.</h2>
                     </Link>
                 </section>
             </div>
         </div>
     </main> 
  < Footer /> 
</>)
}

export default logIn;