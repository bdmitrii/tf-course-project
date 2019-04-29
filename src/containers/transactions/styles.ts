import { Theme, createStyles } from '@material-ui/core/styles';

export default (theme: Theme) =>
  createStyles({
    root: {
      // padding: theme.spacing.unit
    },
    paper: {
      padding: theme.spacing.unit * 2
    },
    heading: {
      fontSize: 18,
      marginRight: 10
    },
    input: {
      padding: '0 10px',
      backgroundColor: theme.palette.grey[200],
      borderRadius: 5
    },
    list: {
      marginTop: theme.spacing.unit,
      backgroundColor: theme.palette.background.paper,
      maxHeight: 350,
      overflow: 'scroll'
    }
  });
