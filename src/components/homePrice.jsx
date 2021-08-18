import React from 'react';
import cross from '../images/cross.png' 
import tick from '../images/tick.png'
import '../styles/homePriceStyle.css';

function HomePrices() {
    return (

        <section className="HomePrices-main">
            <div className="choose-text">
                <h1>Elige un plan y mira lo que quieras en Movy.</h1>
                <a href="">DISFRUTAR UN MES GRATIS</a>
            </div>
            <div className="choose-box">
                <div className="choose-box-container">
                    <div className="choose-box-text-features">
                        <div className="text-features-monthly">
                            <p>Monthly price after free month ends 1/1/2019</p>
                        </div>
                        <div className="text-features-prices-container">
                            <div className="text-features-prices">
                                <h1>BASICO</h1>
                                <p>US$ 8,99</p>
                            </div>
                            <div className="text-features-prices">
                                <h1>ESTANDAR</h1>
                                <p>US$ 12,99</p>
                            </div>
                            <div className="text-features-prices">
                                <h1>PREMIUM</h1>
                                <p>US$ 15,99</p>
                            </div>
                        </div>
                    </div>
                    <div className="choose-box-table">
                        <table>
                            <tr>
                                <td className="gray">HD available</td>
                                <td className="gray"><img src={cross}></img></td>
                                <td className="gray"><img src={tick}></img></td>
                                <td className="gray"><img src={tick}></img></td>
                            </tr>
                            <tr>
                                <td>Ultra  HD available</td>
                                <td><img src={cross}></img></td>
                                <td><img src={cross}></img></td>
                                <td><img src={tick}></img></td>
                            </tr>
                            <tr>
                                <td className="gray">Screens you can watch on at he same time</td>
                                <td className="gray">1</td>
                                <td className="gray">2</td>
                                <td className="gray">4</td>
                            </tr>
                            <tr>
                                <td>Watch on your laptop, TV, phone and tablet</td>
                                <td><img src={tick}></img></td>
                                <td><img src={tick}></img></td>
                                <td><img src={tick}></img></td>
                            </tr>
                            <tr>
                                <td className="gray">Unlimited movies and TV shows</td>
                                <td className="gray"><img src={tick}></img></td>
                                <td className="gray"><img src={tick}></img></td>
                                <td className="gray"><img src={tick}></img></td>
                            </tr>
                            <tr>
                                <td>Cancel anytime</td>
                                <td><img src={tick}></img></td>
                                <td><img src={tick}></img></td>
                                <td><img src={tick}></img></td>
                            </tr>
                            <tr>
                                <td className="gray">First month free</td>
                                <td className="gray"><img src={tick}></img></td>
                                <td className="gray"><img src={tick}></img></td>
                                <td className="gray"><img src={tick}></img></td>
                            </tr>
                        </table>
                 </div>
                </div>
            </div>
        </section>
    )
}

export default HomePrices;
