// import React, { Component } from 'react'

// export default class ComponentDidMount extends Component {
//   render() {
//     return (
//       <div>ComponentDidMount</div>
//     )
//   }
// }
import React, { Component } from "react";

class ComponentDidMount extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ users: data });
      });
  }

  render() {
    return (
      <>
        <h2>Users List</h2>

        {this.state.users.map((user) => (
          <p key={user.id}>{user.name}</p>
        ))}
      </>
    );
  }
}

export default ComponentDidMount;