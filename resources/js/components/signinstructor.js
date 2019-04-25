import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Button from '@material-ui/core/Button';


export default class singinstructor extends Component {
    
    constructor(){
        super();
        this.verificapass = this.verificapass.bind(this);
    }
    verificapass(e){
        var error=document.getElementById("error1");
        var p1=document.getElementById("PP1").value;
        var p2=document.getElementById("PV1").value;
        var str=new String("Las contraseñas no coinciden");
        str=str.fontcolor("red");
        error.innerHTML="";
        if(p1!=p2){
            error.innerHTML=str;
        }
    }

    render() {
        //console.log(this.state.cuarteles.map(p => p.Nombre));
        return (
            
            <div className="container">
                
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div >
                            

                            <div className="card-body">
                                
                                <form method="post" action="api/addfullinstru">
                                    <table>
                                        <tr>
                                            <td><label>CI   :</label></td>
                                            <td><input name="CI" id="CI"type="number" ></input></td>
                                        </tr>
                                        <tr>
                                            <td><label>Nombre:</label></td>
                                            <td><input name="Nombre" id="NomPadre" type="Text" ></input></td>    
                                        </tr>    
                                        <tr>
                                            <td><label>Ap. Paterno:</label></td>
                                            <td><input name="ApPaterno" id="NomMadre" type="Text" ></input></td>    
                                        </tr>
                                        <tr>
                                            <td><label>Ap. Materno:</label></td>
                                            <td><input name="ApMaterno" id="NomMadre" type="Text" ></input></td>    
                                        </tr>
                                        <tr>
                                            <td><label>Genero:</label></td>
                                            <td><select name="Genero">
                                                    <option value="1"  selected>Maculino</option>
                                                    <option value="0" >Femenino</option>
                                                </select></td>   
                                        </tr>
                                        <tr>
                                            <td><label>Departamento   :</label></td>
                                            <td><select id="Departamento" name="Departamento">
                                                    <option disabled selected>seleccione departamento</option>
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
                                            <td><label>Provincia   :</label></td>
                                            <td><input name="Provincia"  type="Text" ></input></td>    
                                        </tr>
                                        <tr>
                                            <td><label>Direccion   :</label></td>
                                            <td><input name="Direccion"  type="Text" ></input></td>    
                                        </tr>
                                        <tr>
                                            <td><label>Fecha de Nacimmiento   :</label></td>
                                            <td><input name="FechaNac"  type="date" ></input></td>    
                                        </tr>     
                                        <tr>
                                            <td><label>Grupo Sanguineo   :</label></td>
                                            <td><select  name="TipoSangre" id="TipoSangre" >
                                                    <option selected>O positivo</option>
                                                    <option >O negativo</option>
                                                    <option >A positivo</option>
                                                    <option >A negativo</option>
                                                    <option >B positivo</option>
                                                    <option >B negativo</option>
                                                    <option >AB positivo</option>
                                                    <option >AB negativo</option>
                                                </select></td>    
                                        </tr>
                                        <tr>
                                            <td><label>Arma   :</label></td>
                                            <td><select  name="Arma" id="TipoSangre" >
                                                    <option selected>Infanteria</option>
                                                    <option >Caballeria</option>
                                                    <option >Artilleria</option>
                                                    <option >Ingenieria</option>
                                                    <option >Comunicaciones</option>
                                                </select></td>    
                                        </tr>   
                                        <tr>
                                            <td><label>Grado   :</label></td>
                                            <td><select  name="Grado" id="TipoSangre" >
                                                    <option selected>Sargento Inicial</option>
                                                    <option >Sargento Segundo</option>
                                                    <option >Sargento Primero</option>
                                                    <option >Suboficial Inicial</option>
                                                    <option >Suboficial Segundo</option>
                                                    <option >Suboficial Primero</option>
                                                    <option >Suboficial Mayor</option>
                                                    <option >Suboficial Maestre</option>
                                                </select></td>    
                                        </tr>
                                        <tr>
                                            <td><label>Idioma Nativo  :</label></td>
                                            <td><select  name="Idioma" >
                                                    <option selected>Castellano</option>
                                                    <option >Aymara</option>
                                                    <option >Quechua</option>
                                                    <option >Güarani</option>
                                            </select></td>
                                        </tr>

                                        <tr>
                                            <td><label>Correo Electronico   :</label></td>
                                            <td><input type="email" name="Correo" ></input></td>    
                                        </tr> 
                                        <tr>
                                            <td><label>Contraseña   :</label></td>
                                            <td><input id="PP1" type="password" name="ContraInstructor" ></input></td>    
                                        </tr>
                                        <tr>
                                            <td><label>Confirme Contraseña   :</label></td>
                                            <td><input id="PV1" type="password" onKeyUp={this.verificapass}></input></td>
                                            <td id="error1"></td>    
                                        </tr>    
                                        <tr>
                                            <td><label>Codigo   :</label></td>
                                            <td><input name="CodInstructor"  type="Text" ></input></td>    
                                        </tr>
                                    <Button variant="contained" color="primary"  type="submit" >
                                                INGRESAR INSTRUCTOR
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

if (document.getElementById('form')) {
    ReactDOM.render(<signinstructor />, document.getElementById('form'));
}

//this.state.cuarteles.map(p =><option> {p.Nombre}</option>)





