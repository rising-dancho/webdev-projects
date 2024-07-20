import React, { Component } from 'react';

class App extends Component {
  foo = () => 'Bar';
  render() {
    const name = 'Happy Coding 🚀';
    const loading = false;
    // const loading = true;
    const showName = true;

    return <>{loading ? 'Loading...' : <h1>Hello {showName && name}</h1>}</>;
  }
}

export default App;
