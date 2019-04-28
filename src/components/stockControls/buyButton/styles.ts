import { Theme, createStyles } from '@material-ui/core/styles';

export default (theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: '#070',
      '&:hover': {
        backgroundColor: '#050'
      },
      color: theme.palette.common.white
    }
  });
