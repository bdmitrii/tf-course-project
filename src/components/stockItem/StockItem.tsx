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
  Chip
} from '@material-ui/core';

import Chart from './Chart';

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

    return (
      <ExpansionPanel className={classes.root} onChange={this.handleChange}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Grid container direction="row" alignItems="center" justify="space-between">
            <Grid item>
              <Grid container direction="row" alignItems="center">
                <div
                  className={classes.stockIcon}
                  style={{
                    backgroundImage: `url(${iconUrl})`,
                    backgroundSize: 'contain'
                  }}
                />
                <Typography className={classes.stockName}>{name}</Typography>
                <Typography className={classes.stockCode} color="default">
                  {code}
                </Typography>
                {count && <Chip className={classes.count} label={countLabel} />}
              </Grid>
            </Grid>
            <Grid item>
              <Grid container direction="column" alignItems="flex-end">
                <Typography className={classes.stockPrice}>{price} RUB</Typography>
                <Typography
                  className={classnames(classes.stockPriceDelta, {
                    [classes.priceDeltaPos]: priceDelta > 0,
                    [classes.priceDeltaNeg]: priceDelta < 0
                  })}
                >
                  {priceDelta >= 0 ? `+${priceDelta}` : `-${priceDelta}`}
                  {percent > 0 && ` (${percent}%)`}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </ExpansionPanelSummary>

        <ExpansionPanelDetails>
          {!stockHistory ? <Stub /> : <Chart data={stockHistory} />}
        </ExpansionPanelDetails>
        <Divider />
        <ExpansionPanelActions>
          {count ? <SellControls id={id} /> : <BuyControls id={id} />}
        </ExpansionPanelActions>
      </ExpansionPanel>
    );
  }
}

export default withStyles(styles)(StockItem);
