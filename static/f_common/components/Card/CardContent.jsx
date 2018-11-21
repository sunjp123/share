


import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from "@material-ui/core/Button";

import DeleteIcon from "@material-ui/icons/Delete"
import EditIcon from "@material-ui/icons/Edit"
import { Tooltip, Hidden } from '@material-ui/core';
const styles = theme => ({
  root: {
    flex: '1 1 33.33333%',
    maxWidth:'33.33333%',
    
    display:"block"

  },
  paper:{
    margin:'10px 10px',
    padding: theme.spacing.unit * 2,
    height:"130px",
    overflow:'hidden',
    transition: 'box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    'border-radius':"6px",
    '&:hover':{
        'box-shadow': "0px 1px 8px 0px rgba(0, 0, 0, 0.2),0px 2px 4px 0px rgba(0, 0, 0, 0.14),0px 3px 2px -2px rgba(0, 0, 0, 0.12)"
    },
    '&:hover button':{
        display:'inline-flex'
    }
  },
  container:{
    overflow:'hidden',
    textOverflow:'ellipsis'
  },
  imgbox:{
    width:128,
    height:128,
    marginRight:10
  },
  image: {
    width: 128,
    height: 128,
  },
  
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  content:{
      flex:'1 1 auto',
      maxWidth:'none',
      width:'auto'
  },
  description:{
    height:"40px",
    overflow:'hidden'
  },
  button:{
      width:'40px',
      minWidth:'40px',
      display:'none'
  }
});

function ComplexGrid(props) {
  const { classes ,info,onOpenEditDialog,deleteItem} = props;
  return (
    <a   target={info.target} href={info.add?'javascript:void(0)':info.link} className={classes.root}>
    <Paper  className={classes.paper} >
      <Grid container wrap={'nowrap'} direction="row" spacing={8} className={classes.container} >
        <Grid item className={classes.imgbox}>
          <ButtonBase className={classes.image}>
            <img className={classes.img} alt="complex" src={info.icon?info.icon:info.img} width='128px' height='128px'/>
          </ButtonBase>
        </Grid>
        <Grid item xs={3} sm container className={classes.content}>
          <Grid item xs container direction="column" spacing={8}>
            <Grid item xs >
              <Typography gutterBottom variant="h5" noWrap>
                {info.title}
              </Typography>
              <Typography gutterBottom className={classes.description}>{info.description?info.description:(info.add?'':'暂无描述')}</Typography>
              <Typography color="textSecondary">{info.author}</Typography>
            </Grid>
            <Grid item>
                <Tooltip title="修改内容" >
                    <Button style={{ cursor: 'pointer' }} onMouseDown={(ev)=>{onOpenEditDialog(info);ev.nativeEvent.stopImmediatePropagation();ev.defaultPrevented;}} className={classes.button} ><EditIcon color={'action'}/></Button>
                </Tooltip>
                <Tooltip title="删除内容" >
                    <Button style={{ cursor: 'pointer' }} className={classes.button} onClick={(ev)=>{deleteItem(info);ev.nativeEvent.stopPropagation();ev.nativeEvent.stopImmediatePropagation();ev.nativeEvent.preventDefault();}}><DeleteIcon color={'action'}/></Button>
                </Tooltip>
            </Grid>
          </Grid>
          
        </Grid>
      </Grid>
    </Paper>
    </a>
  );
}

ComplexGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ComplexGrid);