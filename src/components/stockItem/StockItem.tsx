import React from 'react';

import { Paper, Grid, Typography } from '@material-ui/core';

import { withStyles, createStyles, Theme, WithStyles } from '@material-ui/core/styles';

const styles = (theme: Theme) =>
  createStyles({
    root: {},
    paper: {
      padding: theme.spacing.unit * 2
    }
  });

interface IProps extends WithStyles<typeof styles> {
  // name: string;
  // price;
}

function StockItem({ classes }: IProps) {
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item>
          <Typography>Test</Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(StockItem);
