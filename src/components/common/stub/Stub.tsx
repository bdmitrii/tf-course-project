import React from 'react';

import { Paper, Grid, Typography, InputBase, CircularProgress } from '@material-ui/core';

import { withStyles, WithStyles } from '@material-ui/core/styles';

import styles from './styles';

interface IProps extends WithStyles<typeof styles> {
  textInfo?: string;
}

function Stub(props: IProps) {
  const { classes, textInfo } = props;

  return (
    <div className={classes.root}>
      {textInfo ? (
        <Paper className={classes.paper}>
          <Typography>{textInfo}</Typography>
        </Paper>
      ) : (
        <Paper className={classes.paper}>
          <CircularProgress />
        </Paper>
      )}
    </div>
  );
}

export default withStyles(styles)(Stub);
