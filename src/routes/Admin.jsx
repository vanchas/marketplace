import React from 'react';

import { userService } from '../_services';

export default class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: null
    };
  }

  componentDidMount() {
    userService.getAll().then(users => this.setState({ users }));
  }

  render() {
    const { users } = this.state;

    return (
      <div>
        <h1>Admin</h1>
        <div>
          All users:
          {users &&
            <ul>
              {users.map((user, i) =>
                <li key={i}>{user.firstName} {user.lastName}</li>
              )}
            </ul>
          }
        </div>
      </div>
    );
  }
}
