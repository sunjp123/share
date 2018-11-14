import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Dialog from "@material-ui/core/Dialog"
import DialogTitle from "@material-ui/core/DialogTitle"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
// @material-ui/icons

// core components
import dialogContentStyle from "../../../assets/jss/material-dashboard-react/components/dialogContentStyle.jsx";


class DialogContentComponent extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    let {children,...rest} = this.props
    return(
      <DialogContent {...rest}>
        {children}
      </DialogContent>
    )  
  }
}


export default withStyles(dialogContentStyle)(DialogContentComponent);
