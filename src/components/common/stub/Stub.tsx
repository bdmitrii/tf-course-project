import React from 'react';

import { Paper, Grid, Typography, InputBase, CircularProgress } from '@material-ui/core';

import { withStyles, WithStyles } from '@material-ui/core/styles';

import styles from './styles';

interface IProps extends WithStyles<typeof styles> {}

function Stub(props: IProps) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <CircularProgress />
      </Paper>
    </div>
  );
}

export default withStyles(styles)(Stub);
