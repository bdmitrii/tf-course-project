import React, { Component, ChangeEvent } from 'react';

import { connect } from 'react-redux';

import {
  ExpansionPanelActions,
  ExpansionPanelSummary,
  ExpansionPanel,
  Grid,
  Typography,
  Button,
  ExpansionPanelDetails,
  Divider,
  Tabs,
  Tab,
  Chip,
  ListItem
} from '@material-ui/core';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { withStyles, WithStyles } from '@material-ui/core/styles';
import classnames from 'classnames';

import {
  IStock,
  IState as IReduxState,
  IStockHistory,
  IAccountStock
} from '../../constants/interfaces';
import { getStockHistoryAction } from '../../actions/stocksActions';
import { buyStocksAction, sellStocksAction } from '../../actions/transactionActions';

import styles from './styles';
import Stub from '../common/stub/Stub';
// import StockControls from './StockControls';

import BuyButton from '../stockControls/buyButton/BuyButton';
import withStockControls from '../stockControls/withStockControls';
import SellButton from '../stockControls/sellButton/SellButton';

interface IProps extends WithStyles<typeof styles>, IAccountStock {
  getStockHistory: typeof getStockHistoryAction;
  histories: Array<IStockHistory>;
}

interface IState {
  count: number;
}

const BuyControls = withStockControls(BuyButton, buyStocksAction);
const SellControls = withStockControls(SellButton, sellStocksAction);

class StockItem extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      count: 0
    };
  }

  handleTabChange = () => {};

  handleChange = (event: ChangeEvent<{}>, expanded: boolean) => {
    const { id, getStockHistory } = this.props;

    if (expanded) {
      getStockHistory({ id });
    }
  };

  render() {
    const {
      classes,
      name,
      price,
      priceDelta,
      code,
      iconUrl,
      histories,
      id,
      count
    } = this.props;

    const stockHistory: IStockHistory = histories.find(
      h => h.stockId === id
    ) as IStockHistory;

    const percent: number = +(price / (price - priceDelta)).toFixed(6);
    const countLabel = `x${count}`;

    return <ListItem />;
  }
}

export default withStyles(styles)(StockItem);
