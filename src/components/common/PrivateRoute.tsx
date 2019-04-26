import React, { FunctionComponent } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { IState, IAuthenticated } from '../../constants/interfaces';

interface IProps {
  component: FunctionComponent | typeof React.Component;
  auth: IAuthenticated;
  path: string;
}

const PrivateRoute = ({ component: Component, auth, path }: IProps) => (
  <Route
    path={path}
    render={props =>
      auth.isAuthenticated === true ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);

const mapStateToProps = (state: IState) => ({
  auth: state.auth
});

export default connect(mapStateToProps)(PrivateRoute);
