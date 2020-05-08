import React from 'react';
import Loadable from 'react-loadable';
import { authenticationService } from '../_services';
import { Route, Router, NavLink } from 'react-router-dom';
import { history } from '../_helpers';

const LoginForm = Loadable({
  loader: () => import(/* webpackChunkName: "" */ '../components/app/login/LoginForm'),
  loading: () => <div>loading ...</div>,
  modules: ['LoginForm'],
});
const RegForm = Loadable({
  loader: () => import(/* webpackChunkName: "" */ '../components/app/login/RegForm'),
  loading: () => <div>loading ...</div>,
  modules: ['RegForm'],
});

export default class Login extends React.Component {
  constructor(props) {
    super(props);

    // redirect to home if already logged in
    if (authenticationService.currentUserValue) {
      this.props.history.push('/');
    }
  }

  componentDidMount() {
    history.push('/login/sign-in');
  }

  render() {
    return (
      <Router history={history}>
        <div className="d-flex flex-column">
          <div className="container py-3">
            <NavLink to="/login/sign-up"
              className="btn btn-secondary float-right"
              activeClassName="active" >
              Registration
            </NavLink>
            <NavLink to="/login/sign-in"
              className="btn btn-secondary float-right mr-2"
              activeClassName="active" >
              Login
            </NavLink>
          </div>

          <div className="container py-3 mx-auto">

            <Route path="/login/sign-in"
              component={LoginForm} />

            <Route path="/login/sign-up"
              component={RegForm} />
          </div>
        </div>
      </Router>
    )
  }
}
