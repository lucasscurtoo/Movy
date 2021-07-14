import '../App.css';
import React from 'react';
import HomePrices from './homePrice'


function Main(){
    return(
         <>
        <main>
      <header className="Main-header">
         <div className="Main-header-logo">
          <p>Movy</p>
          <p id="Logo-oval"></p>
         </div>
         <div className="Main-header-in">
            <a>Register</a>
            <a id="Log-in">Login</a>
         </div>
     </header>
         <div className="Main-text">
             <h1>El mejor cine online</h1>
             <p>DISFRUTA DONDE QUIERAS.CANCELA CUANDO QUIERAS.</p>
             <a>PRUEBA AHORA</a>
         </div>
     </main>
        <div className="Main-interfaces">
            <button className="Home-prices">
            <h1>Precio</h1>
            </button>
            <button className="Home-cancel">
                <h1>Cancelar</h1>
            </button>
            <button className="Home-watch"></button>
         </div>
         </>
    )
}
export default Main;