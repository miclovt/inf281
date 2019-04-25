import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Tablasolsincomp from './tablasistencia';
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
export default class Tla extends Component{
    render(){
        const theme = createMuiTheme({ typography: { useNextVariants: true } });
        return(
            <ThemeProvider theme={theme}>
                <Tablasolsincomp />
            </ThemeProvider>
        );
    }
}
if (document.getElementById('listasistencia')) {
    ReactDOM.render(<Tla />, document.getElementById('listasistencia'));
}
