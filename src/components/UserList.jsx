import React, { Component } from 'react';
import axios from 'axios';

export default class UserList extends Component {
  state = {
    users: [],
    loading: true,
    error: null,
  };

  componentDidMount() {
    const url = 'https://jsonplaceholder.typicode.com/users';
    axios
      .get(url)
      .then(response => {
        console.log(response);
        this.setState({ users: response.data, loading: false }); // Corectare: 'loading' în loc de 'loding'
      })
      .catch(error => {
        this.setState({ error: error.message, loading: false });
      });
  }

  render() {
    const { users, loading, error } = this.state;

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
      <div>
        <h1>UserList</h1>
        <div>
          <ul>
            {users.map(
              (
                user // Corectare: utilizarea corectă a map()
              ) => (
                <li key={user.id}>
                  <strong>{user.name}</strong> - {user.email}{' '}
                  {/* Corectare: formatarea textului */}
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    );
  }
}
