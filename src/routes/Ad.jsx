import React, { Component } from 'react'
import { fakeDesires } from '../fake-desire-example';
// import { desiresService } from '../_services'

export default class Desire extends Component {
  constructor(props) {
    super(props);
    this.state = {
      desire: {
        id: null,
        photo: null,
        video: null,
        description: "Description",
        current_price: 123,
        old_price: null,
        header: "Header",
        user_id: 1,
        rating: 2,
        first_category: "Category first",
        second_category: "Second catogory",
        first_subcategory: "subcat first",
        second_subcategory: "subcat second",
        type_id: 1,
        priority_id: 1,
        created_at: "2020-04-28T08:29:24.000000Z",
        updated_at: "2020-04-28T08:29:24.000000Z"
      }
    };
  }

  componentDidMount() {
    // desiresService.getAllDesires()
    fakeDesires.map(d => {
      if (d.id === this.props.location.query.id) {
        this.setState({ desire: d });
      }
    })
  }

  render() {
    return (
      <div>
        {(this.state.desire.id === null
          || this.state.desire.id === 'null')
          ? <div className="text-primary p-3" disabled>
            <span className="spinner-border mr-3" role="status" aria-hidden="true" />
            <span className="sr-only"></span>Loading...
          </div>
          : <div>
            <h1>{this.state.desire.header}</h1>
            <div>{JSON.stringify(this.state.desire)}</div>
          </div>
        }
      </div>
    )
  }
}
