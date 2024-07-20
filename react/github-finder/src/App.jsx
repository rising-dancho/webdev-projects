import React, { Component } from 'react';

class App extends Component {
  foo = () => 'Bar';
  render() {
    const name = 'Happy Coding 🚀';
    // const loading = false;
    const loading = true;

    return (
      <h1>
        {loading ? (
          'Loading...'
        ) : (
          <>
            {' '}
            {name} {this.foo()}
          </>
        )}
      </h1>
    );
  }
}

export default App;
