import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import stiles from './estilos.css';
import Button from '@material-ui/core/Button';
export default class Botonres extends Component{
    constructor(){
        super();
        this.linkear=this.linkear.bind(this);
    }
    linkear(e){
        window.location="http://localhost:8000/reserva";
    }

    render(){
        return (
           <center> 
                <Button   onClick={this.linkear}>
                    <p style={{fontSize:"32px", color:"#3490dc"}}>RESERVAS</p>
                </Button>
                </center>
        );
    }
}
if (document.getElementById('boton')) {
    ReactDOM.render(<Botonres />, document.getElementById('boton'));
}