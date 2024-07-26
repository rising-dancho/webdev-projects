import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import Users from './components/users/Users';
import axios from 'axios';
import Search from './components/users/Search';
import Alert from './components/layouts/Alert';
import About from './components/pages/About';

class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null,
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

  // set alert
  setAlert = (msg, type) => {
    this.setState({ alert: { msg: msg, type: type } });

    setTimeout(() => {
      this.setState({ alert: null });
    }, 4500);
  };

  render() {
    const { users, loading, alert } = this.state;

    return (
      <Router>
        <div className="App">
          <div className=" bg-primary">
            <Navbar title="Github Finder" icon="fab fa-github" />
          </div>
          <div className="container">
            <Alert alert={alert} />
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Search
                      searchUsers={this.searchUsers}
                      clearUsers={this.clearUsers}
                      showClear={users.length > 0 ? true : false}
                      setAlert={this.setAlert}
                    />
                    <Users loading={loading} users={users} />
                  </>
                }
              />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
