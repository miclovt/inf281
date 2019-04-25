import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Tablapostulantes from './tablapostulantes';
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
export default class Tp extends Component{
    render(){
        const theme = createMuiTheme({ typography: { useNextVariants: true } });
        return(
            <ThemeProvider theme={theme}>
                <Tablapostulantes />
            </ThemeProvider>
        );
    }
}
if (document.getElementById('root')) {
    ReactDOM.render(<Tp />, document.getElementById('root'));
}
