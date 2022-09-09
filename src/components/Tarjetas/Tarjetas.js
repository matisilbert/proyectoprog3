import React, { Component } from 'react';
import {Link} from "react-router-dom"


class Tarjetas extends Component {
  constructor(props) {
    super(props)
    this.state = {
    };
}
render(){
    return(
  
  <article>
       <Link to={`/detail/movies/id/${this.props.datosPeli.id}`}>
        <img src= {`https://image.tmdb.org/t/p/w342/${this.props.datosPeli.poster_path}`} alt=""/>
        </Link>
        <h2>{this.props.datosPeli.original_name}</h2>
        <p>{this.props.datosPeli.overview}</p>
  </article>
  )
}
}

export default Tarjetas;

/*En tarjeta recibo toda la lista de canciones y despues tatjetas hace el map para que se renderize cada una de las tarjetas con la info que requiere */