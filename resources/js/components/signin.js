import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import SignInstu from './signinstructor';
import Signsoldado from './signsoldado';



export default class Signin extends Component {
    constructor(){
        super();
        this.mostrarformi=this.mostrarformi.bind(this);
        this.mostrarforms=this.mostrarforms.bind(this);
    }
    mostrarformi(e){
        if(window.getComputedStyle(document.getElementById('si')).display==='none'){
            document.getElementById('si').style.display='block';
            document.getElementById('ss').style.display='none';
        }
    }
    mostrarforms(e){
        if(window.getComputedStyle(document.getElementById('ss')).display==='none'){
            document.getElementById('ss').style.display='block';
            document.getElementById('si').style.display='none';
        }
    }
    render() {
        //console.log(this.state.cuarteles.map(p => p.Nombre));
        const signistru = {
            display : 'none',
          };
        return (
            
            <div >
                
                <div className="card-header"><h3>SIGN IN</h3></div>

                            <div className="card-body">

                                <table>
                                    <tr>Seleccione que tipo de usuario es:</tr>
                                    <tr></tr>
                                    <tr>
                                    
                                    <td><input type="radio" name="tab" value="igotnone" onClick={this.mostrarforms} />
                                        Soldado
                                    </td>
                                    <td width="50px"></td>
                                    <td>
                                        <input type="radio" name="tab" value="igottwo"  onClick={this.mostrarformi} />
                                        Instructor
                                    </td>
                                    </tr>
                                </table>
                                <div id="ss" style={signistru} >
                                <Signsoldado />
                                </div>
                                <div id="si" style={signistru} >
                                <SignInstu  />    
                                </div>
                                
                                
                            </div>
            </div>
        );
    }
}

if (document.getElementById('signin')) {
    ReactDOM.render(<Signin />, document.getElementById('signin'));
}

//this.state.cuarteles.map(p =><option> {p.Nombre}</option>)





