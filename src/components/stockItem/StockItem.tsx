import React, { Component } from 'react';

import {
  ExpansionPanelActions,
  ExpansionPanelSummary,
  ExpansionPanel,
  Grid,
  Typography,
  Button,
  ExpansionPanelDetails,
  Divider
} from '@material-ui/core';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { withStyles, createStyles, Theme, WithStyles } from '@material-ui/core/styles';

const styles = (theme: Theme) =>
  createStyles({
    root: {},
    paper: {
      padding: theme.spacing.unit * 2
    },
    prices: {
      marginLeft: 'auto'
    }
  });

interface IProps extends WithStyles<typeof styles> {
  name?: string;
  price?: number;
  priceDelta?: number;
  id?: number;
  code?: string;
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

  handleBuy = () => {};

  render() {
    const { classes, name, price, priceDelta, code } = this.props;

    return (
      <ExpansionPanel className={classes.root}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>{name}</Typography>
          <div className={classes.prices}>
            <Typography variant="title">{price && price.toFixed(2)}</Typography>
            {/* <Typography>{priceDelta}</Typography> */}
          </div>
        </ExpansionPanelSummary>

        <ExpansionPanelDetails>
          <Typography>Code: {code}</Typography>
        </ExpansionPanelDetails>
        <Divider />
        <ExpansionPanelActions>
          <Button>Купить</Button>
        </ExpansionPanelActions>
      </ExpansionPanel>
    );
  }
}

export default withStyles(styles)(StockItem);
