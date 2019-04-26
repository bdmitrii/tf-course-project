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

import { IState, IStock, IStocks } from '../../constants/interfaces';

import StockItem from '../stockItem/StockItem';

import { withStyles, createStyles, Theme, WithStyles } from '@material-ui/core/styles';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: theme.spacing.unit,
      minHeight: theme.spacing.unit * 40
      // maxHeight: theme.spacing.unit * 80
    },
    list: {
      backgroundColor: theme.palette.background.paper
    },
    listHeading: {
      fontSize: '18px'
    },
    input: {
      padding: '5px',
      // border: `1px solid #eee`,
      flex: 1
    },
    stocks: {
      // marginTop: theme.spacing.unit * 2
    }
  });

interface IProps extends WithStyles<typeof styles> {
  stocks: IStocks;
}

class StocksList extends Component<IProps> {
  render() {
    const { classes, stocks } = this.props;

    console.log(stocks);

    return (
      <div className={classes.root}>
        {/* <List
          subheader={
            <ListSubheader className={classes.listHeading} component="div">
              <div>Акции</div>
              <Input className={classes.input} placeholder="Найти акции..." />
            </ListSubheader>
          }
        /> */}
        <div className="stocks">
          {stocks.items &&
            stocks.items.map((item: IStock) => (
              <StockItem
                id={item.id}
                key={item.id}
                name={item.name}
                price={item.price}
                priceDelta={item.priceDelta}
                code={item.code}
                iconUrl={item.iconUrl}
              />
            ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: IState) => ({
  stocks: state.allStocks
});

export default connect(mapStateToProps)(withStyles(styles)(StocksList));
