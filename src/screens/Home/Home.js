import React from "react";
import Peliculas from "../../components/Peliculas/Peliculas";
import Series from "../../components/Series/Series";


function Home(){

    return(
        <>
        <div className="bienvenida">
            <div>
                <h1>Bienvenido</h1>
                <h2>Millones de series, peliculas y personajes por descubrir. Explora Ahora.</h2>
            </div>
        </div>
        <div>     
            <Peliculas/>
        </div>
        <div>     
            <Series/>
        </div>
        </>
    )
    
}

export default Home;