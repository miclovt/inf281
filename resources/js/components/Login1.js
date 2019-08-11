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
    window.location.href="http://localhost:8000/"
    //setOpen(true);
  }

  function handleClose() {
    
    setOpen(false);
  }

  return (
    <div>
      <Button  onClick={handleClickOpen} color="inherit">
        CERRAR SESIÒN
      </Button>
      
      
    </div>
  );
}

ResponsiveDialog.propTypes = {
  fullScreen: PropTypes.bool.isRequired,
};

export default withMobileDialog()(ResponsiveDialog);