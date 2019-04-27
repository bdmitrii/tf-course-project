import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { Paper, Grid, Typography, List, ListItem, Divider } from '@material-ui/core';

import { withStyles, createStyles, Theme, WithStyles } from '@material-ui/core/styles';

import AccountHeader from '../../components/accountHeader/AccountHeader';
import { IState as IReduxState, IAccountInfo } from '../../constants/interfaces';
import { getAccountInfoAction } from '../../actions/accountActions';
import StocksList from '../../components/stocksList/StocksList';
import AccountStocksList from '../accountStocksList/AccountStocksList';

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

interface IProps extends WithStyles<typeof styles> {
  account: IAccountInfo;
  getAccountInfo: typeof getAccountInfoAction;
}

class Account extends Component<IProps> {
  componentDidMount() {
    const { getAccountInfo } = this.props;
    getAccountInfo();
  }

  render() {
    const { classes, account } = this.props;

    return (
      <div>
        {!account ? (
          'Loading'
        ) : (
          <AccountHeader name={account.name} balance={account.balance} />
        )}
        <AccountStocksList />
      </div>
    );
  }
}

const mapStateToProps = (state: IReduxState) => ({
  account: state.account
});

export default connect(
  mapStateToProps,
  { getAccountInfo: getAccountInfoAction }
)(withStyles(styles)(Account));
