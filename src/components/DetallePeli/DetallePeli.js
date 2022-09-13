import React, {Component} from "react";

class Detallepeli extends Component{
    constructor(props){
        super(props);
        this.state = {
            detalle: false,

            
        }
    } 
    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=ec7d1aeea6d41d212821b84124febd74`)
        .then(resp => resp.json())
        .then(data => 
              this.setState
            ({
            detalle: data,
            
        })  )
        .catch(error => console.log(error))
    
    }

    render(){
        console.log('Este es el state')
        console.log(this.state.detalle)
        return(
        <>
        {this.state.detalle ?
        <main className="detalle"> 
           <div>
                <img src={`https://image.tmdb.org/t/p/w342/${this.state.Detallepeli.poster_path}`} alt=""></img>
            </div>
            <div>
                <h1>{this.state.Detallepeli.title}</h1>                    
                <ul>
                    <li> Fecha De Estreno {this.state.Detallepeli.release_date}</li>
                </ul>
                <p> Rating {this.state.Detallepeli.vote_average}</p>
                <p> {this.state.Detallepeli.overview}</p>
                <p> Duracion  {this.state.Detallepeli.runtime} minutos</p>
                <p> Genero {this.state.Detallepeli.genres[1].name}</p>
                
            </div>
        </main>: <></> }
        
        </>
        
        )
    } 
}

export default Detallepeli