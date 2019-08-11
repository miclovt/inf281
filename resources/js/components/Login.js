import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import TextField from '@material-ui/core/TextField';

function ResponsiveDialog(props) {
  const [logged,setlogged]=React.useState(false);
  const { fullScreen } = props;
  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    
    setOpen(false);
  }

  return (
    <div>
      <Button  onClick={handleClickOpen}>
      <img src="https://static1.squarespace.com/static/5679179bdf40f3876bad558b/t/5b504c738a922dd648d8939c/1531920044890/profile_icon.png" width="50px" height="50px" ></img>
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title"><img src="https://static1.squarespace.com/static/5679179bdf40f3876bad558b/t/5b504c738a922dd648d8939c/1531920044890/profile_icon.png" width="50px" height="50px"></img>   Log In</DialogTitle>
        <form action="/api/login" method="get">
        <DialogContent>
          
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Carnet de Identidad"
            type="number"
            name="CI"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Contraseña"
            name="ContraInstructor"
            type="password"
            fullWidth
          />
          <DialogContentText>
            <a href="http://localhost:8000/singin">Crear cuenta de usuario</a>  
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button type="submit" color="primary" autoFocus>
            Ingresar
          </Button>
        </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}

ResponsiveDialog.propTypes = {
  fullScreen: PropTypes.bool.isRequired,
};

export default withMobileDialog()(ResponsiveDialog);