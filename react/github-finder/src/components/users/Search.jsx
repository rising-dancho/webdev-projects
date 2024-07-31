import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import GithubContext from '../context/github/githubContext';

function Search() {
  const githubContext = useContext(GithubContext);
  const { users, searchUsers, clearUsers, showAlert } = githubContext;
  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      showAlert('Please enter something', 'light');
    } else {
      searchUsers(text);
      setText('');
    }
  };

  const onChange = (e) => setText(e.target.value);

  return (
    <div>
      <form onSubmit={onSubmit} action="">
        <div
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
            value={text}
            onChange={onChange}
          />
          <input
            type="submit"
            value="Search"
            className="btn btn-dark"
            style={{ marginRight: '0px' }}
          />
        </div>
        {users.length > 0 === true && (
          <button className="btn btn-light btn-block" onClick={clearUsers}>
            Clear
          </button>
        )}
      </form>
    </div>
  );
}

// Search.propTypes = {
//   clearUsers: PropTypes.func.isRequired,
//   showClear: PropTypes.bool.isRequired,
//   showAlert: PropTypes.func.isRequired,
// };

export default Search;
