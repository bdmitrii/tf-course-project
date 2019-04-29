import React, { Component, Fragment } from 'react';

import { Grid } from '@material-ui/core';

import { connect } from 'react-redux';
import { IState as IReduxState } from '../../constants/interfaces';

import { getStocksAction, stocksLoadMoreAction } from '../../actions/stocksActions';

// import SearchIcon from '@material-ui/icons/';
import StocksList from '../../components/stocksList/StocksList';
import Account from '../account/Account';

import { withStyles, WithStyles } from '@material-ui/core/styles';
import styles from './styles';
import StocksHeader from '../../components/stocksHeader/StocksHeader';
import AllStocksList from '../allStocksList/AllStocksList';

interface IProps extends WithStyles<typeof styles> {
  getStocks: typeof getStocksAction;
  stocksLoadMore: typeof stocksLoadMoreAction;
  nextStockId: number;
  prevStockId: number;
  search: string;
}

interface IState {
  prevStockId: number;
  nextStockId: number;
  loaded: boolean;
}

class Stocks extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      prevStockId: 0,
      nextStockId: 0,
      loaded: false
    };
  }

  handleScroll = (event: any) => {
    const { stocksLoadMore, nextStockId, search } = this.props;
    const { loaded } = this.state;

    if (
      window.pageYOffset ===
        document.documentElement.scrollHeight - document.documentElement.clientHeight &&
      !loaded
    ) {
      stocksLoadMore({ search, count: 8, itemId: nextStockId });
    }
  };

  componentDidUpdate(props: IProps, state: IState) {
    const { nextStockId, prevStockId } = this.props;
    const { loaded } = this.state;

    if (
      props.prevStockId === prevStockId &&
      props.nextStockId === nextStockId &&
      !loaded
    ) {
      this.setState({ loaded: true });
    }
  }

  componentDidMount() {
    const { getStocks } = this.props;
    getStocks({ search: '', count: 8, itemId: 1 });

    window.addEventListener('scroll', this.handleScroll);
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container direction="row" spacing={8}>
          <Grid item container direction="column" md={6} sm={12} xs={12} spacing={8}>
            <Grid item>
              <StocksHeader />
            </Grid>
            <Grid item>
              <AllStocksList />
            </Grid>
          </Grid>
          <Grid container item direction="column" md={6} sm={12} xs={12}>
            <Grid item>
              <Account />
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state: IReduxState) => ({
  nextStockId: state.allStocks.nextItemId,
  prevStockId: state.allStocks.prevItemId,
  stocks: state.allStocks.items,
  search: state.allStocks.search
});

export default connect(
  mapStateToProps,
  { getStocks: getStocksAction, stocksLoadMore: stocksLoadMoreAction }
)(withStyles(styles)(Stocks));
