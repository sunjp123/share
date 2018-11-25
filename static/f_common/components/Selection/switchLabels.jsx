import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import withStyles from "@material-ui/core/styles/withStyles";

const switchStyle = {
  colorPrimary:{
    '&$checked':{
      color:'#2196f3'
    }
  },
  checked:{
    color:'#2196f3'
  }
}

class SwitchLabels extends React.Component {
  constructor(props){
    super(props)
  }
  
 

  render() {
    return (
      <FormGroup row >
        {
          this.props.switchLabels.map((switchlabel,index)=>
          <FormControlLabel
            key={index}
            control={
              <Switch
                checked={switchlabel.checked}
                onChange={()=>{this.props.onChange(index,event)}}
                value={switchlabel.value}
                color={switchlabel.color}
                classes={this.props.classes}
              />
            }
            label={switchlabel.label}
          />
          )
        }
        
      </FormGroup>
    );
  }
}

export default withStyles(switchStyle)(SwitchLabels);