import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Button from '@material-ui/core/Button';


export default class FormFecha extends Component {

    render() {
        //console.log(this.state.nombrecuartel);
        //console.log(this.state.cuarteles.map(p => p.Nombre));
        //console.log(window.location.pathname.split('/')[3]);
        return (
            
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header"><h3>Fecha de Inicio de postulaciones</h3></div>

                            <div className="card-body">
                                
                                <form action='/api/fechas' method="post">
                                    <table>
                                        
                                        <tr>
                                            <td><label>Fecha de inicio del reclutamiento  :</label></td>
                                            <td>       </td>
                                            <td><input name="Fecha" type="date" ></input></td>    
                                        </tr> 
                                                            
                                    <Button variant="contained" color="primary" type="submit" >
                                                GUARDAR 
                                    </Button>
                                    </table>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

if (document.getElementById('formfecha')) {
    ReactDOM.render(<FormFecha />, document.getElementById('formfecha'));
}

//this.state.cuarteles.map(p =><option> {p.Nombre}</option>)





