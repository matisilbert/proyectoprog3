import React from "react";
import Peliculas from "../../components/Peliculas/Peliculas";
import Series from "../../components/Series/Series";
import Buscador from "../../components/Buscador/Buscador";
import "./Home.css"


function Home(){
    return(
        <>
        
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