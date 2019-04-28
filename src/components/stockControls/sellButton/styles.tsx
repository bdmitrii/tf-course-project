import { Theme, createStyles } from '@material-ui/core/styles';

export default (theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: '#c00',
      '&:hover': {
        backgroundColor: '#a00'
      },
      color: theme.palette.common.white
    }
  });
