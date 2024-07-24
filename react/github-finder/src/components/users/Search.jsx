import React, { Component } from 'react';

export class Search extends Component {
  state = {
    text: '',
  };

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.text);
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <div>
        <form
          onSubmit={this.onSubmit}
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
            value={this.state.text}
            onChange={this.onChange}
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
