import React, {Component} from 'react'
import './Buscador.css'
/*Componente controlado que se encarga del usuario*/

class Buscador extends Component{
    constructor(props){
        super(props)
        this.state={
            valorInput: ''
        }
    }
    prevenirRefresh(event){ /*Recarga del sitio cuando se envia un formulario*/
        event.preventDefault(event) 
    }
    controlarCambiosDelInput(event){ /*recibo el evento completo y dsos actualizo el estado con el valor escrito en el input del buscador*/
        this.setState({
            valorInput: event.target.value
        },
        () => this.props.filtrar(this.state.valorInput)
        )
    }
    render(){
        return(
            <form className='buscador' onSubmit = {(event)=> this.prevenirRefresh(event)}>
                <input type='text' placeholder='¿Qué deseas buscar?' onChange={(event)=> this.controlarCambiosDelInput(event)} value={this.state.valorInput}/>
            </form>
        )
    }
}

export default Buscador