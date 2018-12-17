import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const styles = {
  root: {
    flexGrow: 1,
  },
  hide:{
    display:'none'
  },
  barColorPrimary:{
    background: "linear-gradient(60deg, #26c6da, #00acc1)"
  },
  colorPrimary:{
    background:'rgb(193, 225, 251)'
  }
};

class LinearDeterminate extends React.Component {
  constructor(props){
      super(props)
  }
  render() {
    const { classes , value=0 , hide } = this.props;
    return (
      <div className={`${classes.root} ${hide?classes.hide:''}`} >
        <LinearProgress variant="determinate" value={value} color={'primary'} 
            classes={{
            colorPrimary:classes.colorPrimary,
            barColorPrimary:classes.barColorPrimary
            }}/>
      </div>
    );
  }
}

LinearDeterminate.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LinearDeterminate);
