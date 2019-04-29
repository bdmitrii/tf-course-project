import React, { Component, Fragment } from 'react';

import { List, Divider } from '@material-ui/core';

import TransactionItem from '../../components/transactionItem/TransactionItem';

import { getTransactionsAction } from '../../actions/transactionActions';
import { IStateTransactions } from '../../constants/interfaces';

import { withStyles, WithStyles } from '@material-ui/core/styles';
import styles from './styles';
import classnames from 'classnames';

interface IProps extends WithStyles<typeof styles> {
  transactions: IStateTransactions;
  transactionsLoadMore: Function;
}

interface IState {
  isLoaded: boolean;
}

class TransactionsList extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      isLoaded: false
    };
  }

  handleScroll = (event: any) => {
    const { transactionsLoadMore } = this.props;
    const { isLoaded } = this.state;

    const listElem = document.querySelector('.transactionsList') as HTMLElement;

    if (
      listElem.scrollTop === listElem.scrollHeight - listElem.clientHeight &&
      !isLoaded
    ) {
      transactionsLoadMore();
    }
  };
  componentDidMount() {
    console.log(document.querySelector('.transactionsList'));
    (document.querySelector('.transactionsList') as Element).addEventListener(
      'scroll',
      this.handleScroll
    );
  }

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
    const { classes, transactions } = this.props;

    return (
      <List className={classnames(classes.list, 'transactionsList')}>
        {transactions.history.items.reverse().map(item => (
          <div>
            <TransactionItem key={item.transactionId} {...item} />
            <Divider />
          </div>
        ))}
      </List>
    );
  }
}

export default withStyles(styles)(TransactionsList);
