import StocksList from '../../components/stocksList/StocksList';
import { connect } from 'react-redux';
import { IState, IAccountStock } from '../../constants/interfaces';

const mapStateToProps = (state: IState) => ({
  stocks: state.allStocks.items
});

export default connect(mapStateToProps)(StocksList);
