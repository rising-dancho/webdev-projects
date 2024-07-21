import React, { Component } from 'react';
import Navbar from './components/layouts/Navbar';
import Users from './components/users/Users';

class App extends Component {
  render() {
    return (
      <>
        <Navbar title="Github Finder" icon="fab fa-github" />
        <div className="container ">
          <Users />
        </div>
      </>
    );
  }
}

export default App;
