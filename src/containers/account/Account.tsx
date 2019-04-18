import React, { Component, Fragment } from 'react';

import { Paper, Grid, Typography, List, ListItem, Divider } from '@material-ui/core';

import { withStyles, createStyles, Theme, WithStyles } from '@material-ui/core/styles';

import UserInfo from '../../components/userInfo/UserInfo';

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

interface IProps extends WithStyles<typeof styles> {}

class Account extends Component<IProps> {
  render() {
    const { classes } = this.props;

    return <div>UserInfo</div>;
  }
}

export default withStyles(styles)(Account);
