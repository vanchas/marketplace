import React, { Component } from 'react'

export default class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        id: null,
        name: null,
        second_name: null,
        email: null,
        phone: null,
        rating: null,
        position: null,
        telegram: null,
        viber: null,
        whatsapp: null,
        site: null,
        avatar: null,
        email_verified_at: null,
        activate: null,
        bx_id: null,
        created_at: null,
        updated_at: null,
        deleted_at: null
      }
    };
  }

  componentDidMount() {
    if (this.props.currentUser) {
      this.setState({ user: this.props.currentUser });
    }
  }

  render() {
    return (
      <div>
        {!this.props.currentUser ?
          <div>
            <h3>Not authorized</h3>
          </div>
          :
          <div>
            <h3>Hello, {this.state.user.name}</h3>
            <p>{JSON.stringify(this.state.user)}</p>
          </div>
        }
      </div>
    )
  }
}
