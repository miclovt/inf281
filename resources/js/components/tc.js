import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Tablacuarteles from './tablacuarteles';
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
export default class Tc extends Component{
    render(){
        const theme1 = createMuiTheme({ typography: { useNextVariants: true } });
        return(
            <ThemeProvider theme={theme1}>
                <Tablacuarteles />
            </ThemeProvider>
        );
    }
}
if (document.getElementById('cuarteles')) {
    ReactDOM.render(<Tc />, document.getElementById('cuarteles'));
}
