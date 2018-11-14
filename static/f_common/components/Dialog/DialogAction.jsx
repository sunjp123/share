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
import DialogAction from "@material-ui/core/DialogActions"
// @material-ui/icons

// core components
import dialogActionStyle from "../../../assets/jss/material-dashboard-react/components/dialogActionStyle.jsx";


class DialogActionComponent extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    let {children,...rest} = this.props
    return(
      <DialogAction {...rest} >
        {children}
      </DialogAction>
    )  
  }
}


export default withStyles(dialogActionStyle)(DialogActionComponent);
