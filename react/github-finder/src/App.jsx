import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import Users from './components/users/Users';
import axios from 'axios';
import Search from './components/users/Search';
import Alert from './components/layouts/Alert';
import About from './components/pages/About';
import User from './components/users/User';
import GithubState from './components/context/github/GithubState';

function App() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  // get a single user
  const getUser = async (username) => {
    setLoading(true);

    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${
        import.meta.env.VITE_CLIENT_ID
      }&client_secret=${import.meta.env.VITE_CLIENT_SECRET}`
    );

    setUser(res.data);
    setLoading(false);
    // console.log(res.data);
    // console.log(res.data.login);
  };

  // get user repos
  const getUserRepos = async (username) => {
    setLoading(true);

    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?sort=created:asc&client_id=${
        import.meta.env.VITE_CLIENT_ID
      }&client_secret=${import.meta.env.VITE_CLIENT_SECRET}`
    );

    setRepos(res.data);
    setLoading(false);
    // console.log(res.data);
  };


  // set alert
  const showAlert = (msg, type) => {
    setAlert({ msg, type });

    setTimeout(() => {
      setAlert(null);
    }, 4500);
  };

  return (
    <GithubState>
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
                    <Search showAlert={showAlert} />
                    <Users loading={loading} users={users} />
                  </>
                }
              />
              <Route path="/about" element={<About />} />
              <Route
                path="/user/:login"
                element={
                  <User
                    user={user}
                    repos={repos}
                    getUser={getUser}
                    getUserRepos={getUserRepos}
                    loading={loading}
                  />
                }
              />
            </Routes>
          </div>
        </div>
      </Router>
    </GithubState>
  );
}

export default App;
