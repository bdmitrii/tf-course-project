import React from 'react';

import { Paper, Grid, Typography } from '@material-ui/core';

import { withStyles, WithStyles } from '@material-ui/core/styles';

import styles from './styles';

interface IProps extends WithStyles<typeof styles> {
  name: string;
  balance: number;
}

function AccountHeader({ classes, name, balance }: IProps) {
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container direction="row" justify="space-between">
          <Grid item>
            <Typography className={classes.name}>{name}</Typography>
          </Grid>
          <Grid item>
            <Typography className={classes.balance}>
              <span className={classes.balanceDescr}>Ваш баланс: </span>
              {balance} RUB
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default withStyles(styles)(AccountHeader);
