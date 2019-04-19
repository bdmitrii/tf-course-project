import React, { Component, Fragment } from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import PrivateRoute from './components/common/PrivateRoute';

import store from './store';
import { Provider } from 'react-redux';

import withRoot from './theme/withRoot';

import Navbar from './components/layout/Navbar';
import SignIn from './components/signIn/SignIn';
import SignUp from './components/signUp/SignUp';
import Stocks from './containers/stocks/Stocks';
import Account from './containers/account/Account';

import CssBaseline from '@material-ui/core/CssBaseline';

import { setAuthAction } from './actions/authActions';
import setAuthToken from './utils/setAuthToken';

if (window.localStorage.getItem('accessToken')) {
  const token = window.localStorage.getItem('accessToken');
  setAuthToken(token);

  store.dispatch(setAuthAction({ isAuthed: true }));
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <CssBaseline />
          <Navbar />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <PrivateRoute path="/stocks" component={Stocks} />
          <Route path="/account" component={Account} />
        </Router>
      </Provider>
    );
  }
}

export default withRoot(App);
