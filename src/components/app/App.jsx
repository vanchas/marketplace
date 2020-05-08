import React, { Component } from 'react';
import Loadable from 'react-loadable';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Route, Router } from 'react-router-dom';
import { setMessage } from '../../store/appReducer';
import './App.scss';
import Header from './header/Header';
import Footer from './footer/Footer';
import { history, Role, PrivateRoute } from '../../_helpers';
import { authenticationService } from '../../_services';
import PWAPrompt from 'react-ios-pwa-prompt';
import InstallPWA from './pwa';


const Sidebar = Loadable({
  loader: () => import(/* webpackChunkName: "" */ './sidebar/Sidebar'),
  loading: () => <div>loading...</div>,
  modules: ['Sidebar'],
});
const Home = Loadable({
  loader: () => import(/* webpackChunkName: "pageDefault" */ '../../routes/Home.jsx'),
  loading: () => <div>loading main...</div>,
  modules: ['Home'],
});
const Login = Loadable({
  loader: () => import(/* webpackChunkName: "" */ '../../routes/Login.jsx'),
  loading: () => <div>loading login page...</div>,
  modules: ['Login'],
});
const Admin = Loadable({
  loader: () => import(/* webpackChunkName: "" */ '../../routes/Admin.jsx'),
  loading: () => <div>loading admin page...</div>,
  modules: ['Admin'],
});
const Ad = Loadable({
  loader: () => import(/* webpackChunkName: "pageAnother" */ '../../routes/Ad.jsx'),
  loading: () => <div>loading announcement page...</div>,
  modules: ['Ad'],
});
const User = Loadable({
  loader: () => import(/* webpackChunkName: "" */ '../../routes/User.jsx'),
  loading: () => <div>loading user profile...</div>,
  modules: ['User'],
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      isAdmin: false
    };
  }

  componentDidMount() {
    authenticationService.currentUser.subscribe(x => this.setState({
      currentUser: x,
      isAdmin: x && x.role === Role.Admin
    }));

    if (!this.props.message) {
      this.props.updateMessage("Hi, I'm from client!");
    }
  }

  render() {
    const { currentUser, isAdmin } = this.state;

    return (
      <Router history={history}>
        <div className="App">
          <PWAPrompt delay={1000}
            copyTitle="Добавить на домашний экран"
            copyBody="Этот сайт имеет функциональность приложения. Добавьте его на домашний экран, чтобы использовать его в полноэкранном и автономном режиме."
            copyShareButtonLabel="1) Нажмите кнопку «Поделиться»"
            copyAddHomeButtonLabel="2) Нажмите «Добавить на главный экран»"
            copyClosePrompt="Отмена"
            promptOnVisit={1}
            timesToShow={3}
            debug={false}
            permanentlyHideOnDismiss={false} />
          <InstallPWA />

          <Sidebar />

          <div className="App-content">
            <Header />

            <main className="App-main">
              <PrivateRoute exact path="/"
                component={Home} />

              <PrivateRoute exact path="/user-profile"
                component={props => <User {...props}
                  currentUser={this.state.currentUser}
                />} />

              <PrivateRoute path="/admin"
                roles={[Role.Admin]}
                component={Admin} />

              <Route path="/login"
                component={Login} />

              <Route path="/ad" component={Ad} />
            </main>

            <Footer />
          </div>

        </div>
      </Router>
    );
  }
}

export default withRouter(
  connect(
    ({ app }) => ({
      message: app.message,
    }),
    dispatch => ({
      updateMessage: (messageText) => dispatch(setMessage(messageText)),
    })
  )(App)
);
