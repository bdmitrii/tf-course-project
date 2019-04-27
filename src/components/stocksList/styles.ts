import { Theme, createStyles } from '@material-ui/core/styles';

export default (theme: Theme) =>
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
