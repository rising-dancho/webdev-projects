import React, { Component } from 'react';

export class Search extends Component {
  render() {
    return (
      <div>
        <form
          action=""
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center',
          }}
        >
          <input
            type="text"
            name="text"
            placeholder="Find people on Github.."
          />
          <input
            type="submit"
            value="Search"
            className="btn btn-dark"
            style={{ marginRight: '0px' }}
          />
        </form>
      </div>
    );
  }
}

export default Search;
