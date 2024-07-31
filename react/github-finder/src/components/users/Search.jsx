import React, { useContext, useState } from 'react';
import GithubContext from '../context/github/githubContext';
import AlertContext from '../context/alert/alertContext';

function Search() {
  const [text, setText] = useState('');

  // github
  const githubContext = useContext(GithubContext);
  const { users, searchUsers, clearUsers } = githubContext;
  // alert
  const alertContext = useContext(AlertContext);
  const { showAlert } = alertContext;

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

export default Search;
