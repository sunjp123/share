import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import customInputStyle from "../../../assets/jss/material-dashboard-react/components/customInputStyle.jsx";


class SimpleSelect extends React.Component {

  constructor(props){
    super(props)
  }

  render() {
    const { classes ,id,labelText,options,selected,onChange,disabled} = this.props;

    return (
      <FormControl className={classes.formControl} disabled={disabled}>
            <InputLabel htmlFor={id}>{labelText}</InputLabel>
            <Select
            value={selected.value}
            onChange={onChange}
            inputProps={{
                name: labelText,
                id: id,
            }}
            >
            {
              options.map((option,index)=><MenuItem key={index} value={option.value}>{option.name}</MenuItem>)
            }
            </Select>
      </FormControl>
    );
  }
}

SimpleSelect.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(customInputStyle)(SimpleSelect);




