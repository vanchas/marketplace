import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import './sidebar.scss'
import { authenticationService } from '../../../_services';
import { Role, history } from '../../../_helpers';

export default class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navLinks: [
        { url: '/', name: 'Home page' }
      ],
      currentUser: null,
      isAdmin: false
    };
  }

  componentDidMount() {
    authenticationService.currentUser.subscribe(x => this.setState({
      currentUser: x,
      isAdmin: x && x.role === Role.Admin
    }));
  }

  logout() {
    authenticationService.logout();
    history.push('/login');
  }

  render() {
    const { currentUser, isAdmin } = this.state;

    return (
      <aside className="sidebar">
        <ul>
          <NavLink to="/user-profile"
            className="btn"
            activeClassName="active" >
            Profile
          </NavLink>
          {this.state.navLinks.map(({ url, name }) => (
            <li key={Math.random()}>
              <NavLink to={url}
                className="btn"
                activeClassName="active" >
                {name}
              </NavLink>
            </li>
          ))}
          {currentUser && <React.Fragment>
            {isAdmin && <li>
              <NavLink to="/admin"
                className="btn"
                activeClassName="active" >
                Admin page
            </NavLink>
            </li>}
            <li>
              <a onClick={this.logout} className="btn">Logout</a>
            </li>
          </React.Fragment>}
        </ul>
      </aside>
    );
  }
}