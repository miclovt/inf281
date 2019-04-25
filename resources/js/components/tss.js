import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Tablasolsincomp from './tablasolsincomp';
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
export default class Tss extends Component{
    render(){
        const theme = createMuiTheme({ typography: { useNextVariants: true } });
        return(
            <ThemeProvider theme={theme}>
                <Tablasolsincomp />
            </ThemeProvider>
        );
    }
}
if (document.getElementById('soldadosincompa')) {
    ReactDOM.render(<Tss />, document.getElementById('soldadosincompa'));
}
