import StocksList from '../../components/stocksList/StocksList';
import { connect } from 'react-redux';
import { IState } from '../../constants/interfaces';

const mapStateToProps = (state: IState) => ({
  stocks: state.account.stocks
});

export default connect(mapStateToProps)(StocksList);
