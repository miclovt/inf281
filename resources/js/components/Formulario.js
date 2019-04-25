import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Button from '@material-ui/core/Button';


export default class Formulario extends Component {
 
constructor () {
    super()
    this.onChangeDep = this.onChangeDep.bind(this);
    this.onFillCuartel= this.onFillCuartel.bind(this);
    this.state = {
        cuarteles: []
    }
}
 /*componentDidMount () {
    //console.log(document.getElementById("Departamento").options[document.getElementById("Departamento").selectedIndex].text);
    axios.get(`api/reserva/${document.getElementById("Departamento").value}`).then(response => {
        console.log(response.data);
        this.setState({
            cuarteles: response.data
        })
    })  
}*/
    
onChangeDep(e){

    
    var select = document.getElementById('Cuarteles');
    //console.log(this.state.cuarteles);
    //console.log(document.getElementById("Departamento").value);
    while (select.length>1) {
        select.removeChild(select.lastChild);
    }//var select = document.getElementById('Cuarteles');
    //console.log("asdasdasdasdas");
    axios.get(`api/reserva/${document.getElementById("Departamento").value}`).then(response => {
        //console.log(response.data);
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

onFillCuartel(e){
    
    //this.componentDidMount();
    var select = document.getElementById('Cuarteles');
    
    for(var i = 0; i < this.state.cuarteles.length; i++) {
        var opt = this.state.cuarteles[i]['Nombre'];
        var el = document.createElement("option");
        el.textContent = opt;
        select.appendChild(el);
    }
}

    

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
                                
                                <form action='api/reserva' method="post">
                                    <table>
                                    
                                        <tr>
                                            <td><label>CI   :</label></td>
                                            <td><input name="CI" type="number" ></input></td>
                                        </tr>
                                        <tr>
                                            <td><label>Nombre   :</label></td>
                                            <td><input name="Nombre" type="Text" ></input></td>    
                                        </tr>    
                                        <tr>
                                            <td><label>Apellido Paterno:</label></td>
                                            <td><input name="ApPaterno" type="Text" ></input></td>    
                                        </tr>
                                        <tr>
                                            <td><label>Apellido Materno:</label></td>
                                            <td><input name="ApMaterno" type="Text" ></input></td>    
                                        </tr>
                                        <tr>
                                            <td><label>Genero:</label></td>
                                            <td><select name="Genero" >
                                                <option selected value="1">Masculino</option>
                                                <option value="0">Femenino</option>
                                            </select></td>    
                                        </tr>
                                        <tr>
                                            <td><label>Ciudad:</label></td>
                                            <td><select id="Departamento" name="Departamento" onChange={this.onChangeDep} >
                                                    <option diabled selected>selec. departamento</option>
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
                                            <td><label>Regimiento:</label></td>
                                            <td><select id="Cuarteles" name="NombreCuartel"  >
                                                    <option disabled >Seleccione el cuartel</option>
                                                </select></td>    
                                        </tr>   
                                        <tr>
                                            <td><label>Correo Electronico:</label></td>
                                            <td><input type="email" name="Correo" ></input></td>    
                                        </tr>                            
                                    </table>
                                    <center>
                                    <Button variant="contained" color="primary" type="submit" >
                                                REALIZAR RESERVA
                                    </Button>
                                    </center>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

if (document.getElementById('formulario')) {
    ReactDOM.render(<Formulario />, document.getElementById('formulario'));
}

//this.state.cuarteles.map(p =><option> {p.Nombre}</option>)





