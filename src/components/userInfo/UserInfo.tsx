import React from 'react';

import { Paper, Grid, Typography } from '@material-ui/core';

import { withStyles, createStyles, Theme, WithStyles } from '@material-ui/core/styles';

const styles = (theme: Theme) =>
  createStyles({
    root: {},
    paper: {
      padding: theme.spacing.unit * 2,
      display: 'flex',
      justifyContent: 'space-between'
    }
  });

interface IProps extends WithStyles<typeof styles> {
  userName: string;
  userBalance: number;
}

function UserInfo({ classes, userBalance, userName }: IProps) {
  return (
    <div className={classes.root}>
      <Paper>
        <Typography>{userName}</Typography>
        <Typography>{userBalance}</Typography>
      </Paper>
    </div>
  );
}

export default withStyles(styles)(UserInfo);
