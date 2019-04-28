import React, { Component } from 'react';

import { IState as IReduxState } from '../../constants/interfaces';
import StockItem from '../../components/stockItem/StockItem';

import { connect } from 'react-redux';

const mapStateToProps = (state: IReduxState) => ({
  histories: state.histories
});

export default connect(mapStateToProps)(StockItem);
