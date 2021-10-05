import React from 'react';
import MovyLogo from '../images/Movy-logo.png'
import loadingGif from '../images/loading.gif'
import '../styles/loadingStyles.css'
function Loading() {
    return(
        <div className="w-screen h-screen  bg-black">
            <img src={MovyLogo} className="w-30 object-contain m-auto"/>
            <img src={loadingGif} className="w-24 m-auto"/>
        </div>
    )
}

export default Loading;