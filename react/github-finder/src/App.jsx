import React, { Component } from 'react';
import Navbar from './components/layouts/Navbar';
import Users from './components/users/Users';
import axios from 'axios';
import Search from './components/users/Search';
import PropTypes from 'prop-types';

class App extends Component {
  state = {
    users: [],
    loading: false,
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users?client_id=${
        import.meta.env.VITE_CLIENT_ID
      }&client_secret=${import.meta.env.VITE_CLIENT_SECRET}`
    );
    this.setState({ users: res.data, loading: false });
    // console.log(res);
  }

  // search github users
  searchUsers = async (text) => {
    this.setState({ loading: true });
    // console.log(text);
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${
        import.meta.env.VITE_CLIENT_ID
      }&client_secret=${import.meta.env.VITE_CLIENT_SECRET}`
    );
    this.setState({ users: res.data.items, loading: false });
    console.log(res);
  };

  render() {
    return (
      <div className="App">
        <div className=" bg-primary">
          <Navbar title="Github Finder" icon="fab fa-github" />
        </div>
        <div className="container">
          <Search searchUsers={this.searchUsers} />
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
