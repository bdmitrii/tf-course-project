import React, { Component } from 'react';

import { Paper, Grid, List, InputBase, Divider } from '@material-ui/core';

import { connect } from 'react-redux';

import TransactionItem from '../../components/transactionItem/TransactionItem';
import TransactionsList from '../../components/transactionsList/transactionsList';

import {
  getTransactionsAction,
  transactionsLoadMoreAction
} from '../../actions/transactionActions';
import { IState as IReduxState, IStateTransactions } from '../../constants/interfaces';

import { withStyles, WithStyles } from '@material-ui/core/styles';
import styles from './styles';
import classnames from 'classnames';

import Stub from '../../components/common/stub/Stub';

interface IProps extends WithStyles<typeof styles> {
  getTransactions: typeof getTransactionsAction;
  transactions: IStateTransactions;
  transactionsLoadMore: typeof transactionsLoadMoreAction;
}

interface IState {
  search: string;
  isLoaded: boolean;
}

class Transactions extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      search: '',
      isLoaded: false
    };
  }

  handleScroll = (event: any) => {
    const { transactionsLoadMore } = this.props;
    const { search, isLoaded } = this.state;
  };
  componentDidMount() {
    const { getTransactions } = this.props;

    getTransactions({ count: 100, itemId: 0 });
  }

  handleChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const { getTransactions } = this.props;
    const { value } = event.currentTarget;

    this.setState({ search: value, isLoaded: false });
    getTransactions({ count: 100, itemId: 1, search: value });
  };

  componentDidUpdate(props: IProps, state: IState) {
    const { nextItemId, prevItemId } = this.props.transactions.history;
    const { isLoaded } = this.state;

    if (
      props.transactions.history.prevItemId === prevItemId &&
      props.transactions.history.nextItemId === nextItemId &&
      !isLoaded
    ) {
      this.setState({ isLoaded: true });
    }
  }

  render() {
    const { classes, transactions, transactionsLoadMore } = this.props;
    const { search } = this.state;

    return (
      <div className="transactionList">
        <Paper className={classnames(classes.paper)}>
          <Grid container direction="row">
            <Grid item>
              <InputBase
                value={search}
                onChange={this.handleChange}
                placeholder="Найти..."
                className={classes.input}
              />
            </Grid>
          </Grid>
        </Paper>
        {!transactions.loading ? (
          <TransactionsList
            transactions={transactions}
            transactionsLoadMore={() => transactionsLoadMore({ count: 100, itemId: 1 })}
          />
        ) : (
          <Stub />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state: IReduxState) => ({
  transactions: state.transactions
});

export default connect(
  mapStateToProps,
  {
    getTransactions: getTransactionsAction,
    transactionsLoadMore: transactionsLoadMoreAction
  }
)(withStyles(styles)(Transactions));
