import React, { FunctionComponent } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { IState } from '../../store';

interface IProps {
  component: FunctionComponent | typeof React.Component;
  auth?: {
    isAuthed: boolean;
  };
  path: string;
}

const PrivateRoute = ({ component: Component, auth, path }: IProps) => (
  <Route
    path={path}
    render={props =>
      (auth && auth.isAuthed) === true ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

const mapStateToProps = (state: IState) => ({
  auth: state.auth
});

export default connect(mapStateToProps)(PrivateRoute);
