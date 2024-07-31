import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import Alert from './components/layouts/Alert';
import About from './components/pages/About';
import User from './components/users/User';
import GithubState from './components/context/github/GithubState';
import AlertState from './components/context/alert/AlertState';

function App() {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <div className=" bg-primary">
              <Navbar title="Github Finder" icon="fab fa-github" />
            </div>
            <div className="container">
              <Alert />
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <Search />
                      <Users />
                    </>
                  }
                />
                <Route path="/about" element={<About />} />
                <Route path="/user/:login" element={<User />} />
              </Routes>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
}

export default App;
