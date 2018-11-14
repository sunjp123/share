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
import dialogTitleStyle from "../../../assets/jss/material-dashboard-react/components/dialogTitleStyle.jsx";


class DialogTitleComponent extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    let {children,...rest} = this.props
    return(
      <DialogTitle {...rest} >
        {children}
      </DialogTitle>
    )  
  }
}


export default withStyles(dialogTitleStyle)(DialogTitleComponent);
