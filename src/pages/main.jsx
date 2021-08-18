import React, { useState }from 'react';
import { Link } from 'react-router-dom';
import HomePrices from '../components/homePrice'
import HomeCancel from '../components/homeCancel';
import HomeWatch from '../components/homeWatch';
import Footer from '../components/footer';
import Header from '../components/header'
import '../App.css';

function Main(){
    let [homeState, setHomeState] = useState('price');

    function cargarSeccion(){
        if (homeState == 'price') {
            return(
                <HomePrices/>    
            )
         }
         if (homeState == 'cancel') {
            return(
                <HomeCancel/>
            )
         }
         if (homeState == 'watch') {
            return(
                <HomeWatch/>
            )
         }
    }

    return(
         <>
            <main>
                <Header/>
                <div className="Main-text">
                    <h1>El mejor cine online</h1>
                    <p>DISFRUTA DONDE QUIERAS.CANCELA CUANDO QUIERAS.</p>
                    <Link to="/login" id="try-now">PRUEBA AHORA</Link>
                </div>
            </main>
            <div className="Main-interfaces">
                <button className="Home-prices" onClick={() => {setHomeState('price')}}>
                    <img></img>
                    <h1>Precio</h1>
                </button>
                <button className="Home-cancel" onClick={() =>{setHomeState('cancel')}}>
                    <img></img>
                    <h1>Cancelar</h1>
                </button>
                <button className="Home-watch" onClick={()=>{setHomeState('watch')}}>
                    <img></img>
                    <h1>Dispositivos</h1>
                </button>
            </div>
            {cargarSeccion()}
         <Footer/>
         </>
    )
}
export default Main;