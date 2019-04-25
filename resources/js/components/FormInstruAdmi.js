import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Button from '@material-ui/core/Button';


export default class FormInstruAdmi extends Component {
 
constructor () {
    super()
    this.onChangeDep = this.onChangeDep.bind(this);
    this.onChangeAdmi = this.onChangeAdmi.bind(this);
    this.state = {
        cuarteles: []
    }
}

    
onChangeDep(e){

    
    var select = document.getElementById('Cuarteles');
    //console.log(this.state.cuarteles);
    //console.log(document.getElementById("Departamento").value);
    while (select.length>1) {
        select.removeChild(select.lastChild);
    }//var select = document.getElementById('Cuarteles');
    axios.get(`/api/reserva/${document.getElementById("Departamento").value}`).then(response => {
        console.log(response.data);
        for(var i = 0; i < response.data.length; i++) {
            var opt = response.data[i]['Nombre'];
            var el = document.createElement("option");
            el.textContent = opt;
            select.appendChild(el);
        }
    }) 
    //console.log(this.state.cuarteles);
    //console.log(this.state.cuarteles.length);
    /*for(var i = 0; i < this.state.cuarteles.length; i++) {
        var opt = this.state.cuarteles[i]['Nombre'];
        var el = document.createElement("option");
        el.textContent = opt;
        select.appendChild(el);
    }*/
    
}
onChangeAdmi(e){
    if(document.getElementById('admi').checked==true){
        document.getElementById('admi').value="1";
        document.getElementById('Departamento').disabled=true;
        document.getElementById('Cuarteles').disabled=true;
    }else{
        document.getElementById('admi').value="0";
        document.getElementById('Departamento').disabled=false;
        document.getElementById('Cuarteles').disabled=false;
    }
    console.log(document.getElementById('admi').value);
    
}
    render() {
        //console.log(this.state.cuarteles.map(p => p.Nombre));
        return (
            
            <div className="container">
                
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header"><h3>Ingresar Instructor</h3></div>

                            <div className="card-body">
                                
                                <form action='/api/nuevoinstru' method="post">
                                    <table>
                                        <tr>
                                            <td><label>CI   :</label></td>
                                            <td><input name="CI" type="number" ></input></td>
                                        </tr>
                                        <tr>
                                            <td><label>Codigo Instructor   :</label></td>
                                            <td><input name="CodInstructor" type="number" ></input></td>    
                                        </tr> 
                                        <tr>
                                            <td><label>Administrador   :</label></td>
                                            <td> 
                                                <input id="admi" type="checkbox" name="Admin" onChange={this.onChangeAdmi}/>
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
                                            <td><label>Regimiento   :</label></td>
                                            <td><select id="Cuarteles" name="NombreCuartel"  >
                                                    <option disabled >Seleccione el cuartel</option>
                                                </select></td>    
                                        </tr> 
                                                               
                                    <Button variant="contained" color="primary" type="submit" >
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

if (document.getElementById('formInstruAdmi')) {
    ReactDOM.render(<FormInstruAdmi />, document.getElementById('formInstruAdmi'));
}

//this.state.cuarteles.map(p =><option> {p.Nombre}</option>)





