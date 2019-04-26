import { Theme, createStyles } from '@material-ui/core/styles';

export default (theme: Theme) =>
  createStyles({
    root: {},
    paper: {
      padding: theme.spacing.unit * 2
    },
    prices: {
      marginLeft: 'auto'
    },
    stockName: {
      fontSize: '18px',
      fontWeight: 700,
      marginRight: theme.spacing.unit
    },
    stockPrice: {
      fontSize: '18px',
      fontWeight: 400
    },
    stockPriceDelta: {
      fontSize: '16px'
    },
    priceDeltaPos: {
      color: '#00aa00'
    },
    priceDeltaNeg: {
      color: theme.palette.error.main
    },
    stockCode: {
      fontSize: '12px',
      color: theme.palette.grey[500]
    },
    stockIcon: {
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      backgroundColor: theme.palette.grey[500],
      marginRight: theme.spacing.unit * 2
    },
    line: {
      fill: 'none',
      stroke: 'steelblue',
      strokeWidth: '1.5px',
      strokeLinejoin: 'round',
      strokeLinecap: 'round'
    }
  });
