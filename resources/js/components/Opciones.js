import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import stiles from './estilos.css';


export default class Opciones extends Component{

    render(){
       
        return(
            <div className="todo">
                
                <a href={"http://localhost:8000/habilitarervascuarx/"+window.location.pathname.split('/')[3]}>
                <div className="container0" >
                        <img src="/images/postulantes.jpg"  className="imgd"/>
                        <div className="fulll1"></div>
                        <div className="centered0"><p>HABILITAR 
                            </p><p>POSTULANTES</p></div>
                      </div>
             </a>

            <a href={"http://localhost:8000/instru/listasis/"+window.location.pathname.split('/')[3]+"/"+window.location.pathname.split('/')[4]}>
                <div className="container1">
                        <img src="/images/soldados.jpg"  className="imgd"/>
                        <div className="fulll1"></div>
                        <div className="centered0">SOLDADOS</div>
                </div>
            </a>
            <a href={"http://localhost:8000/instru/soldadossincomp/"+window.location.pathname.split('/')[3]+"/"+window.location.pathname.split('/')[4]}>
                <div className="container2">
                        <img src="/images/soldadosincompa.jpg"  className="imgd"/>
                        <div className="fulll1"></div>
                        <div className="centered0">NUEVOS SOLDADOS SIN COMPAÑIA</div>
                </div>
            </a>

            
            </div>
        );
    }
}
if (document.getElementById('opciones')) {
    ReactDOM.render(<Opciones />, document.getElementById('opciones'));
}


/**/