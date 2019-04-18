import React, { Component, Fragment } from 'react';

import { Paper, Grid, Typography, List, ListItem, Divider } from '@material-ui/core';
import StocksList from '../../components/stocksList/StocksList';

import { withStyles, createStyles, Theme, WithStyles } from '@material-ui/core/styles';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: theme.spacing.unit * 2
    },
    list: {
      backgroundColor: theme.palette.background.paper
    }
  });

interface IProps extends WithStyles<typeof styles> {}

class Stocks extends Component<IProps> {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container>
          <Grid item md={6} sm={6} xs={12}>
            <StocksList />
          </Grid>
          <Grid item container md={6} direction="row">
            <Grid item />
            <Grid item />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Stocks);
