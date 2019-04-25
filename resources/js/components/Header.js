import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
//import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
//import MenuIcon from '@material-ui/icons/Menu';
import Login from './Login';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 10,
  },
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" >
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Escudo-de-Bolivia.gif/200px-Escudo-de-Bolivia.gif" width="50px" height="50px"></img>
          </IconButton>
          <Typography variant="h7" color="inherit" className={classes.grow}>
            Ministerio de Defensa
          </Typography>
          <Login>
          <IconButton >
            <img src="https://static1.squarespace.com/static/5679179bdf40f3876bad558b/t/5b504c738a922dd648d8939c/1531920044890/profile_icon.png" width="50px" height="50px"></img>
            
            
          </IconButton>
          </Login>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);


/*export  class Example extends Component {
    render() {
        return (
            <header>
                <AppBar position="static">
                    nEWS
      </AppBar>

            </header>
        );
    }
}

export  class Example1 extends Component {
    render() {
        return (
            <div>
                sadasdasd
            </div>
        );
    }
}
if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
if (document.getElementById('example1')) {
    ReactDOM.render(<Example1 />, document.getElementById('example1'));
}*/