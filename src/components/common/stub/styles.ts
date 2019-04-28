import { Theme, createStyles } from '@material-ui/core/styles';

export default (theme: Theme) =>
  createStyles({
    root: {
      width: '100%'
    },
    paper: {
      padding: theme.spacing.unit * 2,
      height: 100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: 'none'
    }
  });
