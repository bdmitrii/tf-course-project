import React, { Component, Fragment } from 'react';

import { connect } from 'react-redux';

import {
  Paper,
  Grid,
  Typography,
  List,
  ListItem,
  Divider,
  ListSubheader,
  Input
} from '@material-ui/core';

import Stub from '../../components/common/stub/Stub';

import {
  IState,
  IStock,
  IStocks,
  IAccountStock,
  IStockBase
} from '../../constants/interfaces';

import Stock from '../../containers/stock/Stock';

import { withStyles, WithStyles } from '@material-ui/core/styles';

import styles from './styles';

interface IProps extends WithStyles<typeof styles> {
  stocks: IAccountStock[] | IStock[];
}

class StocksList extends Component<IProps> {
  render() {
    const { classes, stocks } = this.props;
    type Stock = IStock;

    return (
      <div className={classes.root}>
        <div className="stocks">
          {stocks.length ? (
            (stocks as Array<IAccountStock | IStock>).map(item => (
              <Stock
                id={item.id}
                key={item.id}
                name={item.name}
                price={item.price}
                priceDelta={item.priceDelta}
                code={item.code}
                iconUrl={item.iconUrl}
                count={(item as IAccountStock).count}
              />
            ))
          ) : (
            <Stub />
          )}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(StocksList);
