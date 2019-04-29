import React, { Component } from 'react';

import { Paper, Grid, Typography, InputBase } from '@material-ui/core';

import { withStyles, WithStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

import debounce from 'lodash/debounce';

import styles from './styles';
import { getStocksAction, setStocksSearchAciton } from '../../actions/stocksActions';

interface IProps extends WithStyles<typeof styles> {
  getStocks: typeof getStocksAction;
  setStocksSearch: typeof setStocksSearchAciton;
}
interface IState {
  value: string;
}

class StocksHeader extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      value: ''
    };
  }

  handleChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const { value } = event.currentTarget;
    const { getStocks, setStocksSearch } = this.props;

    this.setState({ value });

    getStocks({ search: value });
    setStocksSearch(value);
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    return (
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container direction="row">
            <Grid item>
              <Typography className={classes.heading}>Акции</Typography>
            </Grid>
            <Grid item>
              <InputBase
                value={value}
                onChange={this.handleChange}
                placeholder="Найти..."
                className={classes.input}
              />
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
  }
}

export default connect(
  null,
  { getStocks: getStocksAction, setStocksSearch: setStocksSearchAciton }
)(withStyles(styles)(StocksHeader));
