import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Tablacompanias from './tablacompanias';
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
export default class Tcomp extends Component{
    render(){
        const theme1 = createMuiTheme({ typography: { useNextVariants: true } });
        return(
            <ThemeProvider theme={theme1}>
                <Tablacompanias />
            </ThemeProvider>
        );
    }
}
if (document.getElementById('companias')) {
    ReactDOM.render(<Tcomp />, document.getElementById('companias'));
}
