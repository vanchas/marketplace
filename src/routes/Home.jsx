import React, { Component } from 'react'
import { userService, authenticationService } from '../_services';
import { Link } from 'react-router-dom';
// import { desiresService } from '../_services/desires.service';
import { fakeDesires } from '../fake-desire-example';


export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: authenticationService.currentUserValue,
      userFromApi: null,
      desires: []
    };
  }

  componentDidMount() {
    const { currentUser } = this.state;
    userService.getById(currentUser.id).then(userFromApi => this.setState({ userFromApi }));

    this.setState({
      // desires: desiresService.getAll()
      desires: fakeDesires
    });
  }

  render() {
    const { currentUser, userFromApi } = this.state;

    return (
      <div>
        <h1>Home</h1>
        <p>Your role is: <strong>{currentUser.role}</strong>.</p>
        <div>
          Current user from secure api end point:
                    {userFromApi &&
            <ul>
              <li>{userFromApi.firstName} {userFromApi.lastName}</li>
            </ul>
          }
        </div>

        <div>
          {!this.state.desires.length ?
            <div className="spinner-border text-info" role="status">
              <span className="sr-only">Loading...</span>
            </div> :
            <ul>
              {this.state.desires.map((d, i) => {
                return <li key={i}>
                  <Link to={{
                    pathname: "/ad",
                    query: { id: d.id }
                  }} >
                    <h3>{d.id}. {d.header}</h3>
                    <p>{d.description}</p>
                  </Link>
                </li>
              })}
            </ul>
          }
        </div>
      </div>
    )
  }
}
