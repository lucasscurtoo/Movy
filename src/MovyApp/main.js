import '../App.css';
import React, { useState }from 'react';
import HomePrices from './homePrice'
import HomeCancel from './homeCancel';



function Main(){
    let [variable, setVariable] = useState('price');
    function verificar(){
        if (variable == 'price') {
            return(
           <HomePrices/>    
            )
         }
         if (variable == 'cancel') {
             return(
                 <HomeCancel/>
             )
         }
    }
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
            <button className="Home-prices" onClick={() => {setVariable('price')}}>
                <h1>Precio</h1>
            </button>
            <button className="Home-cancel" onClick={() =>{setVariable('cancel')}}>
                <h1>Cancelar</h1>
            </button>
            <button className="Home-watch">
                <h1>Dispositivos</h1>
            </button>
         </div>
         {verificar()}
         </>
    )
}
export default Main;