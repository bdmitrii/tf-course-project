import React from 'react';

import { Button, Typography } from '@material-ui/core';
import { withStyles, WithStyles } from '@material-ui/core/styles';

import styles from './styles';

interface IProps extends WithStyles<typeof styles> {
  onClick?(event: React.MouseEvent<HTMLElement, MouseEvent>): any;
}

const SellButton = (props: IProps) => {
  const { classes, onClick } = props;

  return (
    <Button onClick={onClick} className={classes.root}>
      <Typography color="inherit">Продать</Typography>
    </Button>
  );
};

export default withStyles(styles)(SellButton);
