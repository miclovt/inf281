import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Button from '@material-ui/core/Button';


export default class FormCompania extends Component {
    constructor(){
        super()
        this.state={
            nombrecuartel: ''
        }
    }
    componentDidMount(){
        axios.get(`/api/nomcuartel/${window.location.pathname.split('/')[3]}`).then(response => {
            console.log(response.data);
        this.setState({
            
            nombrecuartel: response.data,
        })
        })
            
        
    }
    render() {
        console.log(this.state.nombrecuartel);
        //console.log(this.state.cuarteles.map(p => p.Nombre));
        //console.log(window.location.pathname.split('/')[3]);
        return (
            
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header"><h3>Cuartel {this.state.nombrecuartel}</h3></div>

                            <div className="card-body">
                                
                                <form action='/api/nuevacompania' method="post">
                                    <table>
                                        
                                        <tr>
                                            <td><label>Nombre de la Compañia   :</label></td>
                                            <td><input name="NomCompania" type="Text" ></input></td>    
                                        </tr> 
                                        <tr>
                                            <td><label>Genero   :</label></td>
                                            <td>
                                                <select  name="Genero"  >
                                                        <option value="1" selected>Maculino</option>
                                                        <option value="0" >Femenino</option>
                                    
                                                </select>
                                            </td>
                                        </tr>
                                        <input type="hidden" name="IdCuartel" value={window.location.pathname.split('/')[3]}></input>                     
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

if (document.getElementById('formCompania')) {
    ReactDOM.render(<FormCompania />, document.getElementById('formCompania'));
}

//this.state.cuarteles.map(p =><option> {p.Nombre}</option>)





