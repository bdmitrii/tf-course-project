import { Theme, createStyles } from '@material-ui/core/styles';
import img from '../../img/Invest-main.png';

export default (theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing.unit * 2
    },
    signUp: {
      marginTop: '0 !important',
      background: '#f00'
    },
    text: {
      textTransform: 'uppercase'
    },
    paper: {
      padding: theme.spacing.unit * 2,
      height: '100%',
      backgroundImage: `url(${img})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right bottom'
    },
    ctaText: {
      marginTop: theme.spacing.unit * 4,
      display: 'block'
    }
  });
