import React from 'react';

import { Paper, Grid, Typography, InputBase } from '@material-ui/core';

import { withStyles, WithStyles } from '@material-ui/core/styles';

import styles from './styles';

interface IProps extends WithStyles<typeof styles> {}

function StocksHeader({ classes }: IProps) {
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container direction="row">
          <Grid item>
            <Typography className={classes.heading}>Акции</Typography>
          </Grid>
          <Grid item>
            <InputBase placeholder="Найти..." className={classes.input} />
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default withStyles(styles)(StocksHeader);
