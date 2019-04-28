import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Tabs, Tab, AppBar, Grid } from '@material-ui/core';

import { withStyles, WithStyles } from '@material-ui/core/styles';

import AccountHeader from '../../components/accountHeader/AccountHeader';
import { IState as IReduxState, IAccountInfo } from '../../constants/interfaces';
import { getAccountInfoAction } from '../../actions/accountActions';
import AccountStocksList from '../accountStocksList/AccountStocksList';
import Stub from '../../components/common/stub/Stub';
import TransactionList from '../transactionList/TransactionList';

import styles from './styles';

interface IProps extends WithStyles<typeof styles> {
  account: IAccountInfo;
  getAccountInfo: typeof getAccountInfoAction;
}

interface IState {
  tabIndex: number;
}

class Account extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      tabIndex: 0
    };
  }

  componentDidMount() {
    const { getAccountInfo } = this.props;
    getAccountInfo();
  }

  componentDidUpdate() {
    // const { getAccountInfo } = this.props;
    // getAccountInfo();
  }

  handleTabChange = (event: React.ChangeEvent<{}>, value: number) => {
    this.setState({ tabIndex: value });
  };

  render() {
    const { classes, account } = this.props;
    const { tabIndex } = this.state;

    return (
      <div>
        <Grid container direction="column" spacing={8}>
          <Grid item>
            {!account ? (
              <Stub />
            ) : (
              <AccountHeader name={account.name} balance={account.balance} />
            )}
          </Grid>
          <Grid item container direction="column" spacing={8}>
            <Grid item>
              <AppBar position="static" color="secondary">
                <Tabs value={tabIndex} onChange={this.handleTabChange}>
                  <Tab label="Мои акции" />
                  <Tab label="История транзакций" />
                </Tabs>
              </AppBar>
            </Grid>
            <Grid item>{tabIndex === 0 && <AccountStocksList />}</Grid>
          </Grid>
        </Grid>
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
