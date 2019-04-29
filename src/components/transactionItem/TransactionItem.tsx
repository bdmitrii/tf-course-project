import React, { Component } from 'react';

import { Grid, Typography, Chip, ListItem } from '@material-ui/core';

import { withStyles, WithStyles } from '@material-ui/core/styles';
import classnames from 'classnames';

import { ITransactionStock } from '../../constants/interfaces';

import styles from './styles';

interface IProps extends WithStyles<typeof styles> {
  transactionId: number;
  stock: ITransactionStock;
  amount: number;
  totalPrice: number;
  date: string;
  type: string;
}

interface IState {
  count: number;
}

class StockItem extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      count: 0
    };
  }

  render() {
    const { classes, stock, totalPrice, amount, type, date } = this.props;

    const formattedDate = new Date(date);

    const year = formattedDate.getFullYear();
    const month = formattedDate.getMonth();
    const d = formattedDate.getDate();
    const hour = formattedDate.getHours();
    const minutes = formattedDate.getMinutes();

    return (
      <ListItem>
        <Grid container direction="row" alignItems="center" spacing={16}>
          <Grid item>
            <div
              className={classes.stockIcon}
              style={{
                backgroundImage: `url(${stock.iconUrl})`,
                backgroundSize: 'contain'
              }}
            />
          </Grid>
          <Grid item>
            <Typography className={classes.stockName}>{stock.name}</Typography>
          </Grid>
          <Grid item>
            <Chip label={`x${amount}`} />
          </Grid>
          <Grid item className={classes.type}>
            <Typography
              className={classnames({
                [classes.priceDeltaNeg]: type === 'buy',
                [classes.priceDeltaPos]: type === 'sell'
              })}
            >
              {type === 'buy' ? 'Покупка' : 'Продажа'}
            </Typography>
          </Grid>
          <Grid item className={classes.type}>
            <Typography>
              {d}-{month}-{year} {hour}:{minutes}
            </Typography>
          </Grid>
          <Grid item className={classes.prices}>
            <Typography className={classes.stockPrice}>{totalPrice} RUB</Typography>
          </Grid>
        </Grid>
      </ListItem>
    );
  }
}

export default withStyles(styles)(StockItem);
