import React from 'react';

import { Paper, Grid, Typography, InputBase } from '@material-ui/core';
import SignUp from '../../components/signUp/SignUp';

import { withStyles, WithStyles } from '@material-ui/core/styles';

import styles from './styles';
import image from '../../img/Invest-main.png';

interface IProps extends WithStyles<typeof styles> {}

function MainPage({ classes }: IProps) {
  return (
    <div className={classes.root}>
      <Grid container direction="row" alignItems="stretch" spacing={16}>
        <Grid container item md={8}>
          <Paper className={classes.paper}>
            <Grid container>
              <Grid item md={8}>
                <Typography variant="display3">
                  Инвестируй и зарабатывай вместе с Oleg Invest!
                </Typography>
                <Typography className={classes.ctaText} variant="display2">
                  Зарегистрируйся, чтобы начать ->
                </Typography>
              </Grid>
            </Grid>
          </Paper>
          <Grid item />
        </Grid>
        <Grid item md={4}>
          <SignUp className={classes.signUp} />
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(MainPage);
