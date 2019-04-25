import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Button from '@material-ui/core/Button';


export default class Formcupos extends Component {
    constructor(){
        super()
        this.state={
            nombrecuartel: '',
            CuposHombre:0,
            CuposMujer:0,
        }
    }
    componentDidMount(){
        axios.get(`/api/nomcuartel/${window.location.pathname.split('/')[2]}`).then(response => {
            //console.log(response.data);
            this.setState({
                
                nombrecuartel: response.data,
            })
        });
        axios.get(`/api/cupos/${window.location.pathname.split('/')[2]}`).then(response => {
            console.log(response.data);
            this.setState({
                
                CuposHombre:response.data.CuposHombre,
                CuposMujer:response.data.CuposMujer,
            })
        });
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
                            <div className="card-header"><h3>Cupos del Cuartel {this.state.nombrecuartel}</h3></div>

                            <div className="card-body">
                                
                                <form action='/api/actucupos' method="post">
                                    <table>
                                        <h5>
                                            CUPOS PARA EL AÑO {new Date().getFullYear()}
                                        </h5>
                                        <tr>
                                            <td><label>Cupos Hombres:</label></td>
                                            <td><input name="CuposHombre" type="number" placeholder={this.state.CuposHombre}></input></td>    
                                        </tr> 
                                        <tr>
                                            <td><label>Cupos Mujeres:</label></td>
                                            <td><input name="CuposMujer" type="number" placeholder={this.state.CuposMujer}></input></td>    
                                        </tr>  
                                        <input name="IdCuartel" type="hidden" value={window.location.pathname.split('/')[2]}></input>              
                                    <Button variant="contained" color="primary" type="submit" >
                                                guardar
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

if (document.getElementById('formcupos')) {
    ReactDOM.render(<Formcupos />, document.getElementById('formcupos'));
}

//this.state.cuarteles.map(p =><option> {p.Nombre}</option>)





