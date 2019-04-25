import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Button from '@material-ui/core/Button';


export default class FormLibreta extends Component {
 
constructor () {
    super()
    this.mostrarentag=this.mostrarentag.bind(this);
    this.state = {
        ci:'',
        nom:'',
        app:'',
        apm:'',
    }
   
}
 componentDidMount () {
    //console.log(document.getElementById("Departamento").options[document.getElementById("Departamento").selectedIndex].text);
    axios.get(`/api/datasoldado/${window.location.pathname.split('/')[3]}`).then(response => {
        console.log(response.data);
        this.setState({
            ci: response.data[0]['CI'],
            nom: response.data[0]['Nombre'],
            app:response.data[0]['ApPaterno'],
            apm:response.data[0]['ApMaterno'],
            
        })
    })  
}
    mostrarentag(e){
        //console.log(document.getElementById("img").value);
        //document.getElementById("imagen").src="D://switchtablas.png";
        var archivoselec=e.target.files[0];
        var reader = new FileReader();
        var img=document.getElementById("imagen");
        img.title=archivoselec.name;
    
        reader.readAsDataURL(archivoselec);
        reader.onload=function(e){
            img.src=e.target.result;
            
        };
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
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header"><h3>Formulario de Libreta</h3></div>

                            <div className="card-body">
                                
                                <form action='/api/addlibreta' method="post" enctype="multipart/form-data">
                                    <table>
                                        <tr>
                                            <img id="imagen" width="250" height="250" />
                                        </tr>
                                        <tr>
                                            <input id="img"  type="file" name="Foto"  accept="image/x-png,image/gif,image/jpeg" onChange={this.mostrarentag}></input>
                                        </tr>
                                        <tr>
                                        <table>
                                        <tr>
                                            <td><label>CI   :</label></td>
                                            <td><label>{this.state.ci}</label> </td>
                                        </tr>
                                        <tr>
                                            <td><label>Serie  :</label></td>
                                            <td><select  name="Serie" >
                                                    <option >A</option>
                                                    <option  >B</option>
                                                    <option  >C</option>
                                                    
                                                </select></td>    
                                        </tr>
                                        <tr>
                                            <td><label>Nombre   :</label></td>
                                            <td><label>{this.state.nom}</label></td>    
                                        </tr>    
                                        <tr>
                                            <td><label>Apellido Paterno   :</label></td>
                                            <td><label>{this.state.app}</label></td>    
                                        </tr>
                                        <tr>
                                            <td><label>Apellido Materno   :</label></td>
                                            <td><label>{this.state.apm}</label></td>    
                                        </tr>
                                        
                                        <tr>
                                            <td><label>Ojos  :</label></td>
                                            <td><select  name="Ojos" >
                                                    <option >Normales</option>
                                                    <option  >Estrechos</option>
                                                    <option  >Prominentes</option>
                                                    <option  >Rasgados</option>
                                                    <option  >Caidos</option>
                                                    <option  >Hundidos</option>
                                                    <option  >Apartados</option>
                                                </select></td>    
                                        </tr>                            
                                        <tr>
                                            <td><label>Labios   :</label></td>
                                            <td><select  name="Labios" >
                                                    <option >Gruesos</option>
                                                    <option  >Delgados</option>
                                                </select></td>    
                                        </tr> 
                                        <tr>
                                            <td><label>Piel  :</label></td>
                                            <td><select  name="Piel" >
                                                    <option >Morena</option>
                                                    <option  >Clara</option>
                                                    <option  >Trigueña</option>
                                                </select></td>    
                                        </tr>
                                        <tr>
                                            <td><label>Nariz  :</label></td>
                                            <td><select  name="Nariz" >
                                                    <option >Normal</option>
                                                    <option  >Chata</option>
                                                    <option  >Respingada</option>
                                                    <option  >Aguileña</option>
                                                </select></td>    
                                        </tr>
                                        <tr>
                                            <td><label>Altura(cm)  :</label></td>
                                            <td><input type="number" name="Altura"></input></td>    
                                        </tr>
                                        <tr>
                                            <td><label>Peso(Kg)  :</label></td>
                                            <td><input type="number" name="Peso"></input></td>    
                                        </tr>
                                        <input type="hidden" name="CiSoldado" value={window.location.pathname.split('/')[3]} />
                                        <input type="hidden" name="CiInstructor" value={window.location.pathname.split('/')[4]} />
                                    </table>
                                        </tr>
                                    </table>
                                    <Button variant="contained" color="primary" type="submit" >
                                        REALIZAR LIBRETA
                                    </Button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

if (document.getElementById('formLibreta')) {
    ReactDOM.render(<FormLibreta />, document.getElementById('formLibreta'));
}

//this.state.cuarteles.map(p =><option> {p.Nombre}</option>)





