import React, { Component, Fragment } from 'react';

import { Paper, Grid, Typography, List, ListItem } from '@material-ui/core';

import { connect } from 'react-redux';

import { getStocksAction } from '../../actions/stocksActions';

import { withStyles, WithStyles } from '@material-ui/core/styles';
import styles from './styles';

interface IProps extends WithStyles<typeof styles> {
  getStocks: typeof getStocksAction;
}

class TransactionList extends Component<IProps> {
  componentDidMount() {
    const { getStocks } = this.props;
    getStocks({ search: '', count: 6, itemId: 1 });
  }

  render() {
    const { classes } = this.props;

    return (
      <List>
        <ListItem />
      </List>
    );
  }
}

export default connect(
  null,
  { getStocks: getStocksAction }
)(withStyles(styles)(TransactionList));
