import { Theme, createStyles } from '@material-ui/core/styles';

export default (theme: Theme) =>
  createStyles({
    root: {},

    countInput: {
      width: 40,
      backgroundColor: theme.palette.grey[100],
      padding: '0 5px',
      borderRadius: 4
    }
  });
