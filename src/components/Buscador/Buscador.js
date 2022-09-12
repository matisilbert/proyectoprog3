import React, {Component} from 'react'

class Buscador extends Component{
    constructor(props){
        super(props)
        this.state={
            valorInput: ''
        }
    }
    prevenirRefresh(event){ /*Recarga del sitio cuando se envia un formulario*/
        event.preventDefault() 
    }

    controlarCambiosDelInput(event){ /*recibo el evento completo y dsos actualizo el estado con el valor escrito en el input del buscador*/
        this.setState({
            valorInput: event.target.value
        })
    }

    render(){
        return(
            
            <form onSubmit = {(event)=> this.prevenirRefresh(event)}>
                <input onChange={(event)=> this.controlarCambiosDelInput(event)} value={this.state.valorInput}/>
            </form>

        )
    }
}

export default Buscador