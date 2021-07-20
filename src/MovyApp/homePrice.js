import '../styles/homePriceStyle.css';
import React from 'react';
import cross from '../images/cross.png'
import tick from '../images/tick.png'

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
                        <p>Monthly price after free month ends 1/1/2019</p>
                        <table>
                            <tr>
                                <td className="gray">HD available</td>
                                <td>Ultra  HD available</td>
                                <td className="gray">Screens you can watch on at he same time</td>
                                <td>Watch on your laptop, TV, phone and tablet</td>
                                <td className="gray">Unlimited movies and TV shows</td>
                                <td>Cancel anytime</td>
                                <td className="gray">First month free</td>
                            </tr>
                        </table>
                    </div>
                    <div className="choose-box-text-plans-container">
                        <div className="choose-box-text-plans">
                            <h1>BASIC</h1>
                            <p>US$ 8,99</p>
                            <table>
                                <tr>
                                    <td className="gray"><img src={cross}></img></td>
                                    <td><img src={cross}></img></td>
                                    <td className="gray">1</td>
                                    <td><img src={tick}></img></td>
                                    <td className="gray"><img src={tick}></img></td>
                                    <td><img src={tick}></img></td>
                                    <td className="gray"><img src={tick}></img></td>
                                </tr>
                            </table>
                        </div>
                        <div className="choose-box-text-plans">
                            <h1>ESTANDAR</h1>
                            <p>US$ 12,99</p>
                            <table>
                                <tr>
                                    <td className="gray"><img src={tick}></img></td>
                                    <td><img src={cross}></img></td>
                                    <td className="gray">2</td>
                                    <td><img src={tick}></img></td>
                                    <td className="gray"><img src={tick}></img></td>
                                    <td><img src={tick}></img></td>
                                    <td className="gray"><img src={tick}></img></td>
                                </tr>
                            </table>
                        </div>
                        <div className="choose-box-text-plans">
                            <h1>PREMIUM</h1>
                            <p>US$ 15,99</p>
                            <table>
                                <tr>
                                    <td className="gray"><img src={tick}></img></td>
                                    <td><img src={tick}></img></td>
                                    <td className="gray">4</td>
                                    <td><img src={tick}></img></td>
                                    <td className="gray"><img src={tick}></img></td>
                                    <td><img src={tick}></img></td>
                                    <td className="gray"><img src={tick}></img></td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomePrices;