
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

//require('./bootstrap');

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

//require('./components/Example');
import React from 'react';
import ReactDOM from 'react-dom';
import Formulario from './components/Formulario';
import Header from  './components/Header';
import Formcuartel from  './components/FormCuartel';
import FormInstruAdmi from  './components/FormInstruAdmi';
import FormCompania from  './components/FormCompania';
import Tp from './components/tp';
import Tla from './components/tla';
import Tc from './components/tc';
import Tss from './components/tss';
import Tcomp from './components/tcomp';
import Signin from './components/signin';
import FormuLibreta from './components/FormLibreta';
import Formucupos from './components/Formcupos';
import Imagenesindex from './components/Imagenesindex';
//import Opciones from './components/Opciones';
import Opciones from './components/Opciones';
import FormFecha from './components/FormFecha';
import Boton from './components/Botonres';


ReactDOM.render(<Header />, document.getElementById('header'));

ReactDOM.render(<Tc />,document.getElementById("cuarteles"));
ReactDOM.render(<Tcomp />,document.getElementById("companias"));
ReactDOM.render(<Tp />,document.getElementById("root"));
ReactDOM.render(<Tss />,document.getElementById("soldadosincompa"));
ReactDOM.render(<Tla />,document.getElementById("listasistencia"));
ReactDOM.render(<Signin />,document.getElementById("signin"));
ReactDOM.render(<Imagenesindex />,document.getElementById("Imagenesindex"));



ReactDOM.render(<Signinstructor />, document.getElementById('signinstructor'));
ReactDOM.render(<Formcuartel />, document.getElementById('formcuartel'));
ReactDOM.render(<FormInstruAdmi />, document.getElementById('formInstruAdmi'));
ReactDOM.render(<FormCompania />, document.getElementById('formCompania'));
ReactDOM.render(<Formulario />, document.getElementById('formularioreserva'));
ReactDOM.render(<FormuLibreta />, document.getElementById('formLibreta'));
ReactDOM.render(<Formucupos />, document.getElementById('formcupos'));
ReactDOM.render(<Opciones />,document.getElementById('opciones'));
ReactDOM.render(<FormFecha />,document.getElementById('formfecha'));
ReactDOM.render(<Boton />,document.getElementById('boton'));
 