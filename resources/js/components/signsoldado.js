import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Button from '@material-ui/core/Button';


export default class singsoldado extends Component {
    constructor(){
        super();
        this.verificapass = this.verificapass.bind(this);
        this.registrar = this.registrar.bind(this);
    }
    registrar(e){
        const request={
            CI:document.getElementById('CI').value,
            NomPadre:document.getElementById('NomPadre').value,
            NomMadre:document.getElementById('NomMadre').value,
            Departamento:document.getElementById('Departamento').value,
            Direccion:document.getElementById('Direccion').value,
            Provincia:document.getElementById('Provincia').value,
            FechaNac:document.getElementById('FechaNac').value,
            TipoSangre:document.getElementById('TipoSangre').value,
            Idioma:document.getElementById('Idioma').value,
            ContraSoldado:document.getElementById('ContraSoldado').value,
        };
        console.log(request);
        axios.post('api/addfullsoldado',request);
    }
    verificapass(e){
        var error=document.getElementById("error");
        var p1=document.getElementById("PP").value;
        var p2=document.getElementById("PV").value;
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
                                
                                <form method="post" action="api/addfullsoldado">
                                    <table>
                                        <tr>
                                            <td><label>CI   :</label></td>
                                            <td><input name="CI" id="CI"type="number" ></input></td>
                                        </tr>
                                        <tr>
                                            <td><label>Nombre del Padre:</label></td>
                                            <td><input name="NomPadre" id="NomPadre" type="Text" ></input></td>    
                                        </tr>    
                                        <tr>
                                            <td><label>Nombre de la Madre:</label></td>
                                            <td><input name="NomMadre" id="NomMadre" type="Text" ></input></td>    
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
                                            <td><input name="Provincia" id="Provincia" type="Text" ></input></td>    
                                        </tr>
                                        <tr>
                                            <td><label>Direccion   :</label></td>
                                            <td><input name="Direccion" id="Direccion" type="Text" ></input></td>    
                                        </tr>
                                        <tr>
                                            <td><label>Fecha de Nacimmiento   :</label></td>
                                            <td><input name="FechaNac" id="FechaNac" type="date" ></input></td>    
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
                                            <td><label>Idioma Nativo  :</label></td>
                                            <td><select  name="Idioma" id="Idioma" >
                                                    <option selected>Castellano</option>
                                                    <option >Aymara</option>
                                                    <option >Quechua</option>
                                                    <option >Güarani</option>
                                            </select></td>
                                        </tr>
                                        <tr>
                                            <td><label>Contraseña   :</label></td>
                                            <td><input id="PP" type="password" name="ContraSoldado" ></input></td>    
                                        </tr>
                                        <tr>
                                            <td><label>Confirme Contraseña   :</label></td>
                                            <td><input id="PV" type="password" onKeyUp={this.verificapass}></input></td>
                                            <td id="error"></td>    
                                        </tr>    
                                    <Button variant="contained" color="primary"  type="submit" >
                                                INGRESAR SOLDADO
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
    ReactDOM.render(<signsoldado />, document.getElementById('form'));
}

//this.state.cuarteles.map(p =><option> {p.Nombre}</option>)





