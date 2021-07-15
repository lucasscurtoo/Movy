import '../App.css';
import React, { useState }from 'react';
import HomePrices from './homePrice'



function Main(){
    const [variable, setVariable] = useState('');
    function verificar(){
        if (variable == 'price') {
            return(
           <HomePrices/>    
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
            <button className="Home-cancel">
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