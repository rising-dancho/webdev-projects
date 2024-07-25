import React, { Component } from 'react';
import Navbar from './components/layouts/Navbar';
import Users from './components/users/Users';
import axios from 'axios';
import Search from './components/users/Search';

class App extends Component {
  state = {
    users: [],
    loading: false,
  };

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

  // clear users for state
  clearUsers = () => {
    this.setState({ users: [], loading: true });
    window.location.reload();
    // axios
    //   .get(
    //     `https://api.github.com/users?client_id=${
    //       import.meta.env.VITE_CLIENT_ID
    //     }&client_secret=${import.meta.env.VITE_CLIENT_SECRET}`
    //   )
    //   .then((res) => {
    //     this.setState({ users: res.data, loading: false });
    //     console.log(res);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  };

  render() {
    const { users, loading } = this.state;

    return (
      <div className="App">
        <div className=" bg-primary">
          <Navbar title="Github Finder" icon="fab fa-github" />
        </div>
        <div className="container">
          <Search
            searchUsers={this.searchUsers}
            clearUsers={this.clearUsers}
            showClear={users.length > 0 ? true : false}
          />
          <Users loading={loading} users={users} />
        </div>
      </div>
    );
  }
}

export default App;
