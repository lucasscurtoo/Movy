import React from 'react';
import '../styles/homeCancelStyle.css'
import Movydis from '../images/movy-dis.png'

function HomeCancel() {
    return (
        <div className="HomeCancel-main">
            <div className="HomeCancel-text">
                <p>Si piensas que Movy no es lo tuyo, no hay <br/> problema. Sin compromisos. <br/>Cancela
                    online cuando quieras.</p>
                <a id="enjoyFreeMonth">DISFRUTAR UN MES GRATIS</a>
            </div>
            <div className="HomeCancel-img">
                <img src={Movydis}></img>
            </div>
        </div>
    )
}

export default HomeCancel;