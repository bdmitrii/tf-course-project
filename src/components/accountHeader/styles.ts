import { Theme, createStyles } from '@material-ui/core/styles';

export default (theme: Theme) =>
  createStyles({
    root: {
      // padding: theme.spacing.unit
    },
    paper: {
      padding: theme.spacing.unit * 2
    },
    name: {
      fontSize: 18,
      fontWeight: 700
    },
    balance: {
      fontSize: 18
    },
    balanceDescr: {
      color: theme.palette.grey[500]
    }
  });
