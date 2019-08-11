import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Fade } from 'react-slideshow-image';
import stiles from './estilos.css';
import color from '@material-ui/core/colors/indigo';
 
const fadeImages = [
  'images/foto1.jpg',
  'images/foto2.jpg',
  'images/foto3.jpg'
];
 
const fadeProperties = {
  duration: 20000,
  transitionDuration: 500,
  infinite: true,
  indicators: false,
  arrows:true
}
const fondooscuro={
  backgroundColor: '#000000',
   opacity:0.6,
}
export default class Imagenesindex extends Component{
  render() {
    return (
        <Fade {...fadeProperties}>
          <div className="each-fade"  >
            <div className="image-container"  >
              <img src={fadeImages[0]}  width={"100%"} height={"500px"} className="imgd1"  >
                
              </img>
              <div className="fulll"></div>
              <div className="centered2"  ><h1 className="nombre">SISTEMA DE APOYO PARA EL SERVICIO MILITAR OBLIGATORIO</h1></div>
            </div>
            
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img src={fadeImages[1]} width={"100%"} height={"500px"} className="imgd1"/>
              <div className="fulll"></div>
              <div className="centered1"><h1>SERVICIO MILITAR OBLIGATORIO</h1><h5>El servicio militar obligatorio es prestado por varones mayores entre los 17 y 22 años y tiene la duración de un año, la Constitución Política del Estado establece en el Artículo 213, que los sujetos llamados a prestar el servicio militar son todos los bolivianos de forma obligatoria. </h5></div>
            </div>
          
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img src={fadeImages[2]} width={"100%"} height={"500px"} className="imgd1"/>
              <div className="fulll"></div>
              <div className="centered2"><h1 className="nombre">DE QUE TRATA ESTE SISTEMA?</h1><h5>Este sistema proporciona a los instructores un facil control de las actividades dentro del cuartel </h5><h5>Y proporciona a los postulantes al servicio militar dando la oportunidad de reservar un cupo para el cuartel que deseen</h5><h5>Para realizar una reserva haga click en el boton debajo</h5></div>
            </div>
           
          </div>
        </Fade>
      )
    
  }  
}
if (document.getElementById('Imagenesindex')) {
    ReactDOM.render(<Imagenesindex />, document.getElementById('Imagenesindex'));
}

 