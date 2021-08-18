import React from 'react';
import Movydis from '../images/movy-dis.png'
import MovyTv from '../images/movy-tv.png'
import MovyTablet from '../images/movy-tablet.png'
import '../styles/homeWatch.css'

function HomeWatch() {
    return (
        <div className="homeWatch-main">
            <div className="homeWatch-text">
                <p>Ve películas y programas de TV cuando y donde quieras,<br/>
                    personalizados para ti.
                </p>
                <a id="enjoyFreeMonth">DISFRUTAR UN MES GRATIS</a>
            </div>
            <div className="homeWatch-devices">
                <div className="homeWatch-devices-card">
                    <img src={MovyTv}></img>
                    <h1>Ve Movy en tu TV.</h1>
                    <p>Smart TV, PlayStation, Xbox, Roku, Apple TV,<br/>
                        reproductores de Blu-Ray y más.</p>

                </div>
                <div className="homeWatch-devices-card">
                    <img src={MovyTablet}></img>
                    <h1>Disfruta al instante o
                        <br/>
                        descarga videos para más<br/>
                        tarde</h1>
                    <p>Disponible en tu teléfono o tablet,<br/>
                        vayas donde vayas.</p>

                </div>
                <div className="homeWatch-devices-card">
                    <img src={Movydis}></img>
                    <h1>Usa cualquier computadora</h1>
                    <p>Ve directamente en Movy.com.</p>

                </div>

            </div>
        </div>
    )

}

export default HomeWatch;
