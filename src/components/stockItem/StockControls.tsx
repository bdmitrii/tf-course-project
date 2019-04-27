import React, { Component } from 'react';
import * as d3 from 'd3';
import { withStyles, WithStyles } from '@material-ui/core/styles';

import { Button, IconButton, InputBase } from '@material-ui/core';

import { IStockHistory, IHistory } from '../../constants/interfaces';
import { default as AddIcon } from '@material-ui/icons/Add';
import { default as RemoveIcon } from '@material-ui/icons/Remove';

import styles from './styles';

interface IProps extends WithStyles<typeof styles> {}

interface IState {
  count: number | null;
}

class StockControls extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      count: 1
    };
  }

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;

    if (value) {
      this.setState({ count: +value } as Pick<IState, keyof IState>);
    }

    if (value === '') {
      this.setState({ count: null } as Pick<IState, keyof IState>);
    }
  };

  handleInputBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;

    if (value === '') {
      this.setState({ count: 0 } as Pick<IState, keyof IState>);
    }
  };

  handleIncreaseClick = () => {
    const { count: curCount } = this.state;

    if (curCount) {
      this.setState({ count: curCount + 1 });
    }
  };

  handleDecreaseClick = () => {
    const { count: curCount } = this.state;

    if (curCount && curCount !== 1) {
      this.setState({ count: curCount - 1 });
    }
  };

  render() {
    const { count } = this.state;
    const { classes } = this.props;

    return (
      <div>
        <IconButton onClick={this.handleIncreaseClick}>
          <AddIcon />
        </IconButton>
        <InputBase
          value={count === null ? '' : count}
          className={classes.countInput}
          onChange={this.handleInputChange}
          onBlur={this.handleInputBlur}
        />
        <IconButton onClick={this.handleDecreaseClick}>
          <RemoveIcon />
        </IconButton>
        <Button>Купить</Button>
      </div>
    );
  }
}

export default withStyles(styles)(StockControls);
