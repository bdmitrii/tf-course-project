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

import { withStyles, createStyles, Theme, WithStyles } from '@material-ui/core/styles';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: theme.spacing.unit * 2
    },
    list: {
      backgroundColor: theme.palette.background.paper
    },
    input: {
      marginLeft: 8,
      flex: 1
    },
    iconButton: {
      padding: 10
    }
  });

interface IProps extends WithStyles<typeof styles> {
  getStocks?: typeof getStocksAction;
}

class UserStocks extends Component<IProps> {
  componentDidMount() {
    // debugger;
    const { getStocks } = this.props;
    getStocks && getStocks({ search: '', count: 6, itemId: 1 });
  }

  render() {
    const { classes } = this.props;

    return <div className={classes.root} />;
  }
}

export default connect(
  null,
  { getStocks: getStocksAction }
)(withStyles(styles)(UserStocks));
