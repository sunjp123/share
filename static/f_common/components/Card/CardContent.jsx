


import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from "@material-ui/core/Button";

import DeleteIcon from "@material-ui/icons/Delete"
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
    overflow:'hidden'
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
      paddingRight:'128px'
  },
  description:{
    maxHeight:"40px",
    overflow:'hidden'
  }
});

function ComplexGrid(props) {
  const { classes ,info,onClick} = props;
  return (
    <a   target={info.target} href={info.add?'javascript:void(0)':info.link} className={classes.root}>
    <Paper  className={classes.paper} onClick={onClick}>
      <Grid container wrap={'nowrap'} spacing={8}>
        <Grid item>
          <ButtonBase className={classes.image}>
            <img className={classes.img} alt="complex" src={info.img} />
          </ButtonBase>
        </Grid>
        <Grid item xs={3} sm container>
          <Grid item xs container direction="column" spacing={8} className={classes.content}>
            <Grid item xs >
              <Typography gutterBottom variant="title" noWrap>
                {info.title}
              </Typography>
              <Typography gutterBottom className={classes.description}>{info.description?info.description:(info.add?'':'暂无描述')}</Typography>
              <Typography color="textSecondary">{info.author}</Typography>
            </Grid>
            {
                !info.add?(
                    <Grid item>
                        <Button style={{ cursor: 'pointer' }}><DeleteIcon color={'action'}/></Button>
                    </Grid>
                ):null
            }
            
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