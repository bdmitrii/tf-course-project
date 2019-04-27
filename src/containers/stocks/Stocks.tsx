import React, { Component, Fragment } from 'react';

import {
  Paper,
  Grid,
  Typography,
  List,
  ListItem,
  Divider,
  InputBase
} from '@material-ui/core';

import { connect } from 'react-redux';

import { getStocksAction } from '../../actions/stocksActions';

// import SearchIcon from '@material-ui/icons/';
import StocksList from '../../components/stocksList/StocksList';
import Account from '../account/Account';

import { withStyles, WithStyles } from '@material-ui/core/styles';
import styles from './styles';
import StocksHeader from '../../components/stocksHeader/StocksHeader';
import AllStocksList from '../allStocksList/AllStocksList';

interface IProps extends WithStyles<typeof styles> {
  getStocks: typeof getStocksAction;
}

class Stocks extends Component<IProps> {
  componentDidMount() {
    // debugger;
    const { getStocks } = this.props;
    getStocks({ search: '', count: 6, itemId: 1 });
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container>
          <Grid item md={6} sm={12} xs={12}>
            <StocksHeader />
            <AllStocksList />
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <Account />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default connect(
  null,
  { getStocks: getStocksAction }
)(withStyles(styles)(Stocks));
