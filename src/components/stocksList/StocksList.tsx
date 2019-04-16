import React, { Component, Fragment } from 'react';

import { Paper, Grid, Typography, List, ListItem, Divider } from '@material-ui/core';
import StockItem from '../stockItem/StockItem';

import { withStyles, createStyles, Theme, WithStyles } from '@material-ui/core/styles';

const items = {
  nextItem: 0,
  prevItem: 0,
  items: [
    {
      id: 0,
      code: 'TCS',
      name: 'Alpha',
      price: 44,
      priceDelta: 0.3
    },
    {
      id: 1,
      code: 'TCS',
      name: 'TCS Group (Tinkoff)',
      price: 23,
      priceDelta: 0.25
    },
    {
      id: 2,
      code: 'TCS',
      name: 'Sber',
      price: 56,
      priceDelta: 0.1
    }
  ]
};

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

class StocksList extends Component<IProps> {
  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.root}>
        <List>
          {items.items.map(item => (
            <Fragment>
              <ListItem>
                <StockItem />
              </ListItem>
              <li>
                <Divider />
              </li>
            </Fragment>
          ))}
        </List>
        <Paper />
      </Paper>
    );
  }
}

export default withStyles(styles)(StocksList);
