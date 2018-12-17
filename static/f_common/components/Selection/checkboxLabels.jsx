import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import className from 'classnames'

const styles = {
  group:{
     background:'#fff',
     padding:'0 3px 0 3px',
     'border-radius':'0 0 4px 4px',
     'box-shadow':'0 1px 4px 0 rgba(0, 0, 0, 0.14)',
     'justify-content':'center'
  },
  hide:{
    display:'none'
  },
  root: {
    color: blue[600],
    'margin-left':0,
    '&$checked': {
      color: blue[500],
    },
  },
  checked: {},
};

class CheckboxLabels extends React.Component {

  render() {
    const { classes , checkboxs , hide} = this.props;
    const classname = className({
        [classes.group]:true,
        [classes.hide]:hide  
    })
    return (
      <FormGroup row className={classname}>
        {
           checkboxs.map((checkbox,index)=>{
                return (
                        <FormControlLabel
                        key={index}
                        control={
                          <Checkbox
                            checked={checkbox.checked}
                            onChange={_=>this.props.handleChange(checkbox)}
                            value={checkbox.value}
                            classes={{
                                root:classes.root,
                                checked:classes.checked
                            }}
                          />
                        }
                        label={checkbox.label}
                      />
                )
           })
        }
      </FormGroup>
    );
  }
}

CheckboxLabels.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CheckboxLabels);
