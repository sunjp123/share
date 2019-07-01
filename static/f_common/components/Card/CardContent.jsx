


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
  '@media screen and (max-width: 900px)':{
      root: {
        flex: '1 1 50%',
        maxWidth:'50%',     
        display:"block"
      }
  },
  '@media screen and (max-width: 600px)':{
    root: {
      flex: '1 1 100%',
      maxWidth:'100%',     
      display:"block"
    }
  },
  paper:{
    margin:'10px 10px',
    padding: 0,
    // height:"130px",
    // overflow:'hidden',
    transition: 'box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    'border-radius':"6px",
    '&:hover':{
        'box-shadow': "0px 2px 8px 0px rgba(0, 0, 0, 0.3),0px 2px 4px 0px rgba(0, 0, 0, 0.14),0px 3px 2px -2px rgba(0, 0, 0, 0.12)"
    },
    '&:hover .operate':{
      display:'block'
    }
  },
  container:{
    // overflow:'hidden',
    textOverflow:'ellipsis',
    margin:'0 !important',
    width: '100% !important',
  },
  imgbox:{
    position:'relative',
    width: '100% !important',
    height:128,
    margin:'0 !important',
    padding:'0 !important',
    overflow:'hidden',
    borderTopLeftRadius:'4px',
    borderTopRightRadius:'4px'
  },
  image: {
    width: '100%',
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
      width:'100%',
      padding:theme.spacing.unit * 2 + 'px !important'
  },
  description:{
    height:"20px",
    overflow:'hidden'
  },
  author:{
    height:"20px",
    overflow:'hidden' 
  },
  button:{
      width:'40px',
      minWidth:'40px',
      display:'inline-flex'
  },
  operate:{
    position:'absolute',
    top:'4px',
    left:'4px',
    right:'4px',
    height:'40px',
    textAlign:'right',
    display:'none',
    background:'#000',
    opacity:'0.5'
  }
});

function ComplexGrid(props) {
  const { classes ,info,onOpenEditDialog,deleteItem} = props;
  return (
    <a   target={info.target} href={info.add?'javascript:void(0)':info.link} className={classes.root}>
    <Paper  className={classes.paper} >
      <Grid container  direction="row" spacing={8} className={classes.container} >
        <Grid item className={classes.imgbox}>
          <div className={classes.image}>
            <img className={classes.img} alt="complex" src={info.icon?info.icon:info.img}  height='128px' width="100%"/>
          </div>
          <Grid item className={`${classes.operate} operate` }>
              {
                window.__USER_INFO__ && window.__USER_INFO__._id == info.author._id?(
                  <React.Fragment>
                      <Tooltip title="修改内容" >
                        <Button style={{ cursor: 'pointer' }} onMouseDown={(ev)=>{onOpenEditDialog(info);ev.nativeEvent.stopImmediatePropagation();ev.defaultPrevented;}} className={classes.button} ><EditIcon color={'secondary'}/></Button>
                    </Tooltip>
                    <Tooltip title="删除内容" >
                        <Button style={{ cursor: 'pointer' }} className={classes.button} onClick={(ev)=>{deleteItem(info);ev.nativeEvent.stopPropagation();ev.nativeEvent.stopImmediatePropagation();ev.nativeEvent.preventDefault();}}><DeleteIcon color={'secondary'}/></Button>
                    </Tooltip>
                  </React.Fragment>
                ):null
              }
              
          </Grid>
        </Grid>
        <Grid item xs={3} sm container className={classes.content}>
          <Grid item xs container direction="column" spacing={8}>
            <Grid item xs >
              <Typography gutterBottom variant="h5" noWrap>
                {info.title}
              </Typography>
              <Typography gutterBottom className={classes.description}>{info.description?info.description:(info.add?'':'暂无描述')}</Typography>
              <Typography color="textSecondary" className={classes.author}>{info.author?'分享者：'+info.author.nickname:''}</Typography>
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