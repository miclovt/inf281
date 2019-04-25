import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Button from '@material-ui/core/Button';


export default class FormCuartel extends Component {
 
        /*componentDidMount () {
            axios.get('/api/reserva',{
                params:{
                    nomdep: document.getElementById("Departamento").options[document.getElementById("Departamento").selectedIndex].text
                }
            }).then(response => {
            this.setState({
                cuarteles: response.data.Departamento
            })
            })
        }*/
    render() {
        //console.log(this.state.cuarteles.map(p => p.Nombre));
        return (
            
            <div className="container">
                
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header"><h3>Formulario de Reserva</h3></div>

                            <div className="card-body">
                                
                                <form action='/api/nuevocuartel' method="post">
                                    <table>
                                        
                                        <tr>
                                            <td><label>Nombre del Cuartel   :</label></td>
                                            <td><input name="Nombre" type="Text" ></input></td>    
                                        </tr> 
                                        <tr>
                                            <td><label>Arma   :</label></td>
                                            <td>
                                                <select  name="Arma"  >
                                                        <option value="Infanteria" selected>Infanteria</option>
                                                        <option value="Caballeria" >Caballeria</option>
                                                        <option value="Comunicaciones" >Comunicaciones</option>
                                                        <option value="Ingenieria" >Ingenieria</option>
                                                        <option value="Artilleria" >Artilleria</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><label>Departamento   :</label></td>
                                            <td><select id="Departamento" name="Departamento" onChange={this.onChangeDep} >
                                                    <option diabled selected>seleccione departamento</option>
                                                    <option value="La Paz" >La Paz</option>
                                                    <option value="Oruro" >Oruro</option>
                                                    <option value="Potosi" >Potosi</option>
                                                    <option value="Cochabamba" >Cochabamba</option>
                                                    <option value="Sucre" >Sucre</option>
                                                    <option value="Tarija" >Tarija</option>
                                                    <option value="Pando" >Pando</option>
                                                    <option value="Beni" >Beni</option>
                                                    <option value="Santa Cruz" >Santa Cruz</option>
                                                </select></td>    
                                        </tr>
                                        
                                        <tr>
                                            <td><label>Tipo   :</label></td>
                                            <td><select  name="Tipo"  >
                                                    <option value="Fuerzas Armadas" >Fuerzas Armadas</option>
                                                    <option value="Fuerza Aerea" >Fuerza Aerea</option>
                                                    <option value="Fuerza Naval" >Fuerza Naval</option>
                                                </select></td>    
                                        </tr>   
                                        <tr>
                                            <td><label>Direccion   :</label></td>
                                            <td><td><input name="Direccion" type="Text" ></input></td> </td>    
                                        </tr>                        
                                    <Button variant="contained" color="primary" type="submit" >
                                                INGRESAR CUARTEL
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

if (document.getElementById('formcuartel')) {
    ReactDOM.render(<FormCuartel />, document.getElementById('formcuartel'));
}

//this.state.cuarteles.map(p =><option> {p.Nombre}</option>)





