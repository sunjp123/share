import React from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


import dialogStyle from "../../../assets/jss/material-dashboard-react/components/dialogStyle.jsx";

class AlertDialog extends React.Component {


  constructor(props) {
    super(props)
    this.handleClose = this.handleClose.bind(this)
  }
  handleClose() {
    this.props.handleClose()
  }
  render() {
    const { open, title, content, confirmBtn = "确定", cancelBtn = "取消", handleConfirm = this.handleClose , classes} = this.props;
    return (
      <div>
        <Dialog
          open={open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          PaperProps={{
            style:{flex:"1 1 auto"}
          }}
        >
          <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {content}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleConfirm} color="primary">
              {confirmBtn}
            </Button>
            <Button onClick={this.handleClose} color="primary" autoFocus>
              {cancelBtn}
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }

}


export default withStyles(dialogStyle)(AlertDialog);