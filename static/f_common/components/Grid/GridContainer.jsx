import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";

const style = {
  grid: {
    margin: "0 -15px !important",
    width: "unset"
  },
  addButton:{
    width:"170px"
  }
};

function GridContainer(props) {
  const { classes, children, addButton,...rest } = props;
  return (
    <Grid container {...rest} className={`${classes.grid} ${addButton?classes.addButton:''}`}>
      {children}
    </Grid>
  );
}

export default withStyles(style)(GridContainer);
