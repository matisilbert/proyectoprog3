import React, {Component} from 'react' /*Tiene que ser un componente de clase porque necesito un component did mount para el fetch*/
import Tarjetas from '../../components/Tarjetas/Tarjetas'


class Home extends Component {
    constructor(){
        super()
        this.state={
            peliculasPopulares: [], /*Hago 2 states porque le voy a pegar a 2 fetch*/
            topPeliculas: [],
        }
    }
    componentDidMount(){
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=ec7d1aeea6d41d212821b84124febd74&language=en-US&page=1')
        .then(resp => resp.json()) /*Parseamos a Json*/
        .then(data => this.setState({
            peliculasPopulares: data.results
        }))
        .catch(err => console.log(err))
        fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=ec7d1aeea6d41d212821b84124febd74&language=en-US&page=1')
        .then(resp => resp.json()) 
        .then(data => this.setState({
            topPeliculas: data.results
        }))
    }
    render(){
        return(
            <React.Fragment> 
            <main>
                <h1> Soy la Home</h1>
            <section>
            {
                this.state.peliculasPopulares.map((unaPeli, idx) => <Tarjetas key={unaPeli.name + idx} datosPeli={unaPeli} />)
            }
            </section>
            <section>
            {
                this.state.topPeliculas.map((unaPeli, idx) => <Tarjetas key={unaPeli.name + idx} datosTopPeliculas={unaPeli} />)
            }
            </section>
            </main>
            </React.Fragment>
        )
    }
}

export default Home