import { Theme, createStyles } from '@material-ui/core/styles';

export default (theme: Theme) =>
  createStyles({
    root: {
      display: 'flex'
    },
    paper: {
      padding: theme.spacing.unit * 2
    },
    prices: {
      marginLeft: 'auto'
    },
    stockName: {
      fontSize: '18px',
      minWidth: 120
    },
    stockPrice: {
      fontSize: '18px',
      fontWeight: 400,
      minWidth: 100
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
    count: {
      marginLeft: 10
    },
    stockIcon: {
      width: '20px',
      height: '20px',
      borderRadius: '50%',
      backgroundColor: theme.palette.grey[500]
    },
    countInput: {
      width: 40,
      backgroundColor: theme.palette.grey[100],
      padding: '0 5px',
      borderRadius: 4
    },
    type: {
      marginLeft: 'auto'
    }
  });
